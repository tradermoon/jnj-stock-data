<script>
  import { Section, Page404 } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../../utils';
  import { Button } from 'flowbite-svelte';
  const title = '404';
  const breadcrumb_title = '404 Pages';
  const description =
    "Choose from a collection of 404 'not found' landing pages coded with Tailwind CSS to show your website visitors when a page is unavailable or doesn't exist.";
  const dir = 'marketing';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<Section name="page404">
  <Page404>
    <svelte:fragment slot="h1">404</svelte:fragment>
    <svelte:fragment slot="paragraph">
      <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        Something's missing.
      </p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home page.
      </p>
      <Button href="/" size="lg" color="red">Back to Homepage</Button>
    </svelte:fragment>
  </Page404>
</Section>
