<script lang="ts">
  import { Section, Newsletter } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../../utils';
  import { Input, Button } from 'flowbite-svelte';
  import { Envelope } from 'svelte-heros';
  const breadcrumb_title = 'Newsletter Sections';
  const title = 'Newsletter';
  const dir = 'marketing';
  const description =
    'The newsletter component is an important marketing method that you can use to convince website visitors to sign up for additional news from your organization.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<ExampleDiv>
  <Section>
    <Newsletter>
      <svelte:fragment slot="h2">Sign up for our newsletter</svelte:fragment>
      <p
        class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400"
      >
        Stay up to date with the roadmap progress, announcements and exclusive discounts feel free
        to sign up with your email.
      </p>
      <form
        action="https://app.convertkit.com/forms/4692392/subscriptions"
        method="post"
        id="revue-form"
        name="revue-form"
        class="flex max-w-xl md:mx-auto"
      >
        <div class="w-full">
          <label for="member_email" class="hidden">Email address</label>
          <div class="relative h-full">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                ><path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
              >
            </div>
            <input
              type="email"
              id="member_email"
              name="member[email]"
              class="block w-full px-3 py-3 pl-10 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl revue-form-field focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter your email"
              required=""
            />
          </div>
        </div>
        <div class="revue-form-actions">
          <input
            type="submit"
            name="member[subscribe]"
            id="member_submit"
            class="w-full px-4 py-3 text-base font-semibold text-center text-white bg-primary-600 border border-primary-600 cursor-pointer rounded-r-xl formkit-submit hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-primary-600"
            value="Subscribe"
          />
        </div>
      </form>
      <p class="text-sm py-3 text-gray-500 md:text-center dark:text-gray-400">
        We care about the protection of your data. <a
          href="/"
          class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >Read our Privacy Policy</a
        >.
      </p>
      <!-- <Input
              class="block w-full rounded-none rounded-l-lg px-3 pl-10 text-base text-gray-900 bg-white
              border border-gray-200 revue-form-field focus:ring-blue-500
              focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              id="email"
              type="email"
              icon={Envelope}
              iconSize="20"
              iconClass="mr-2 dark:text-gray-400"
              placeholder="Enter your email"
              size="lg"
              ><svg
                slot="left"
                aria-hidden="true"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg
              >
            </Input>
          </div>
          <div>
            <Button
              type="submit"
              class="rounded-none rounded-r-lg"
              btnClass="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >Subscribe</Button
            >
          </div> -->
    </Newsletter>
  </Section>
</ExampleDiv>
