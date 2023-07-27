// Define the load function
export const load = async ({ locals, cookies }) => {
  const email = cookies.get('email');
  const verified = cookies.get('verified');
  // console.log(email);

  if (email) {
    console.log('####+layout.server.ts email', email);
    // Return the output object
    return { email, verified };
  }
  // Return the output object
  return {
    email: undefined,
    verified: false
  };
};
