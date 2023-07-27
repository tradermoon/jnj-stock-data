import { redirect } from "@sveltejs/kit";

// // & TODO: 2번 로그인을 해야 적용되는 것 개선
const setCookies = (cookies, locals) => {
  console.log(
    "@@@setCookies locals.pb.authStore.model",
    locals.pb.authStore.model
  );

  if (locals.pb.authStore.model) {
    cookies.set("email", locals.pb.authStore.model.email, {
      path: "/",
    });
    cookies.set("verified", locals.pb.authStore.model.verified, {
      path: "/",
    });
  } else {
    cookies.set("email", "", {
      path: "/",
    });
    cookies.set("verified", false, {
      path: "/",
    });
  }
};

export const GET = async ({ locals, url, cookies, request }) => {
  // console.log(url.searchParams);
  const redirectURL = `${url.origin}/users/oauth/github`;
  // console.log("redirectURL", redirectURL);
  const expectedState = cookies.get("state");
  const expectedVerifier = cookies.get("verifier");

  console.log("expected", expectedState);

  const state = await url.searchParams.get("state");
  const code = await url.searchParams.get("code");

  // console.log("returned state", state);
  // console.log("returned code", code);

  //as a side effect this will generate a new code verifier, hence why we need to pass the verifier back in through the cookie
  const authMethods = await locals.pb?.collection("users").listAuthMethods();

  if (!authMethods?.authProviders) {
    console.log("No Auth Providers");
    throw redirect(303, "/users/signup");
  }

  const provider = authMethods.authProviders.find(
    (provider) => provider.name == "github"
  );
  if (!provider) {
    console.log("Provider Not Found");
    throw redirect(303, "/users/signup");
  }

  if (expectedState !== state) {
    console.log("Returned State Does not Match Expected", expectedState, state);
    throw redirect(303, "/users/signup");
  }

  try {
    console.log(provider);
    await locals.pb
      ?.collection("users")
      .authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {
        username: "",
      });
    setCookies(cookies, locals);
  } catch (err) {
    console.log("Error logging in with OAuth2 user", err);
  }

  throw redirect(303, "/");
};

// export const GET = async ({ locals, url, cookies, request }) => {
//   // console.log(url.searchParams);
//   const redirectURL = `${url.origin}/users/oauth/github`;
//   // console.log("redirectURL", redirectURL);
//   const expectedState = cookies.get("state");
//   const expectedVerifier = cookies.get("verifier");

//   console.log("expected", expectedState);

//   const state = await url.searchParams.get("state");
//   const code = await url.searchParams.get("code");

//   // console.log("returned state", state);
//   // console.log("returned code", code);

//   //as a side effect this will generate a new code verifier, hence why we need to pass the verifier back in through the cookie
//   const authMethods = await locals.pb?.collection("users").listAuthMethods();

//   if (!authMethods?.authProviders) {
//     console.log("No Auth Providers");
//     throw redirect(303, "/users/signup");
//   }

//   const provider = authMethods.authProviders.find(
//     (provider) => provider.name == "github"
//   );
//   if (!provider) {
//     console.log("Provider Not Found");
//     throw redirect(303, "/users/signup");
//   }

//   if (expectedState !== state) {
//     console.log("Returned State Does not Match Expected", expectedState, state);
//     throw redirect(303, "/users/signup");
//   }

//   try {
//     console.log(provider);
//     await locals.pb
//       ?.collection("users")
//       .authWithOAuth2Code(provider.name, code, expectedVerifier, redirectURL, {
//         username: "",
//       });
//     setCookies(cookies, locals);
//   } catch (err) {
//     console.log("Error logging in with OAuth2 user", err);
//   }

//   throw redirect(303, "/");
// };
