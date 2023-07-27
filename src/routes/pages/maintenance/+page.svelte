<script>
  import { Section, Maintenance } from '$lib';
  import { ExampleDiv, SectionHeader, SectionBlock, MetaTag } from '../../utils';
  const breadcrumb_title = 'Maintenance Pages';
  const title = 'Maintenance';
  const dir = 'marketing';
  const description =
    'Get started with maintenance pages coded with Tailwind CSS to show your users when you are currently working on an update and the website is not accessible.';
</script>

<MetaTag {breadcrumb_title} {title} {dir} {description} />

<Section name="maintenance">
  <Maintenance>
    <svelte:fragment slot="h1">Under Maintenance</svelte:fragment>
    <svelte:fragment slot="paragraph">
      Our Enterprise administrators are performing scheduled maintenance.
    </svelte:fragment>
  </Maintenance>
</Section>
