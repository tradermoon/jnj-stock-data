// src/routes/logout/+server.ts

import { redirect } from "@sveltejs/kit";

// import type { RequestEvent, RequestHandler } from './$types';

export const GET = ({ locals, cookies }) => {
  // Clear the authStore
  locals.pb?.authStore.clear();

  // Set the user to undefined
  locals.user = undefined;

  cookies.delete("state");
  cookies.delete("verifier");
  cookies.delete("email", {
    path: "/",
  });
  cookies.delete("verified", {
    path: "/",
  });
  // Redirect to the home page
  throw redirect(303, "/");
};
