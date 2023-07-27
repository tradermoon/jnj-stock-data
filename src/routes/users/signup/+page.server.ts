import { redirect } from '@sveltejs/kit';

export async function load({ locals, url, cookies }) {
  //console.log(' load',url.origin)
  return {};
}

export const actions = {
  signup: async ({ request, locals }) => {
    const form = await request.formData();

    const name = form.get('name') ?? '';
    const email = form.get('email') ?? '';
    const password = form.get('password') ?? '';

    let createResult = false;

    const data = {
      name,
      email,
      password: '',
      passwordConfirm: ''
    };

    let registerResponse = {
      error: false,
      email: email,
      name,
      message: ''
    };

    try {
      data.password = password;
      data.passwordConfirm = password;
      //create the user
      const result = await locals.pb?.collection('users').create(data);
      await locals.pb.collection('users').requestVerification(data.email); // TODO: verify page redirect
      console.log(`send email to ${data.email}`);

      if (result) createResult = true;
    } catch (err) {
      console.log('error', err);
      registerResponse.error = true;
      registerResponse.message = message;
    } finally {
      if (!createResult) {
        return registerResponse;
      }
      if (createResult) throw redirect(303, '/');
    }
  }
};
