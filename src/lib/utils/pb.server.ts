import PocketBase from 'pocketbase';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';
import { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } from '$env/static/private';

export const PB = new PocketBase(PUBLIC_POCKETBASE_URL);

// const adminPb = new PocketBase(PUBLIC_POCKETBASE_URL);
// const userPb = new PocketBase(PUBLIC_POCKETBASE_URL);
// //sign in
// await adminPb.admins.authWithPassword(POCKETBASE_ADMIN_EMAIL,POCKETBASE_ADMIN_PASSWORD);
// event.locals.adminPb = adminPb;
// event.locals.userPb = userPb;
