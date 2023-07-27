import { redirect } from '@sveltejs/kit';

export async function load({ locals, url, cookies }) {
  //console.log(' load',url.origin)
  return {};
}

const setCookies = (cookies, locals) => {
  console.log('@@@setCookies locals.pb.authStore.model', locals.pb.authStore.model);

  if (locals.pb.authStore.model) {
    cookies.set('email', locals.pb.authStore.model.email, {
      path: '/'
    });
    cookies.set('verified', locals.pb.authStore.model.verified, {
      path: '/'
    });
  } else {
    cookies.set('email', '', {
      path: '/'
    });
    cookies.set('verified', false, {
      path: '/'
    });
  }
};

export const actions = {
  loginByEmail: async ({ cookies, request, locals }) => {
    const data = Object.fromEntries(await request.formData());

    // & TODO: 등록되지 않은 Email 처리 / not verified Email 표시
    try {
      await locals.pb.collection('users').authWithPassword(data.email, data.password);
      if (!locals.pb?.authStore?.model?.verified) {
        locals.pb.authStore.clear();
        return {
          notVerified: true
        };
      } else {
        setCookies(cookies, locals);
      }
    } catch (err) {
      // & 비밀번호가 틀렸을 경우, 해당 이메일이 없는 경우...
      console.log('Error: ', err);
      // throw error(500, 'Something went wrong logging in');
      // throw err;
    }
  },
  oauth: async ({ cookies, url, locals }) => {
    const authMethods = await locals.pb?.collection('users').listAuthMethods();
    if (!authMethods) {
      return {
        authProviderRedirect: '',
        authProviderState: ''
      };
    }
    // console.log('@@@@@@@@@@@@authMethods', authMethods);
    const vendor = url.searchParams.get('vendor');
    const redirectURL = `${url.origin}/users/oauth/${vendor}`;
    // console.log("redirectURL", redirectURL);
    // console.log("vendor", url.searchParams.get("vendor"));
    const authProvider = authMethods.authProviders.find((provider) => provider.name == vendor);
    const authProviderRedirect = `${authProvider.authUrl}${redirectURL}`;
    const state = authProvider.state;
    const verifier = authProvider.codeVerifier;

    cookies.set('oauth', vendor);
    cookies.set('state', state);
    cookies.set('verifier', verifier);

    setCookies(cookies, locals);

    throw redirect(302, authProviderRedirect);
  }
};
