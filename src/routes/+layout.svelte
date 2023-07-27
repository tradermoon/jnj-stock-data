<script>
  import '../app.css';
  import {
    Footer,
    FooterCopyright,
    FooterIcon,
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Button,
    GradientButton,
    DarkMode
  } from 'flowbite-svelte';
  import { Github } from './utils';

  export let data;
  $: ({ email, verified } = data);

  let navClass = 'bg-white border-gray-200 py-2.5 dark:bg-gray-800';
  let navDivClass = 'flex flex-wrap justify-between items-center mx-auto max-w-8xl px-4';
  let btnClass =
    'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 ml-2';
</script>

<main>
  <div class="flex flex-col bg-white dark:bg-gray-900">
    <header class="sticky top-0 z-40 flex-none mx-auto w-full bg-white dark:bg-gray-900">
      <Navbar let:hidden let:toggle fluid={false} {navClass} {navDivClass}>
        <NavBrand href="/">
          <img src="/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            IIMS
          </span>
        </NavBrand>
        <div class="flex items-center lg:order-2 gap-1">
          {#if email}
            <a href="/users/logout"
              ><GradientButton outline color="purpleToBlue">로그아웃</GradientButton></a
            >
            <GradientButton shadow color="green">설정</GradientButton>
          {:else}
            <a href="/users/login"><Button>로그인</Button></a>
            <a href="/users/signup"><Button color="alternative">가입</Button></a>
          {/if}
          <DarkMode {btnClass} />
          <NavHamburger
            on:click={toggle}
            btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          />
        </div>
        <NavUl
          {hidden}
          divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
        >
          <NavLi href="/bid">입찰관리</NavLi>
          <NavLi href="/schedule" target="_blank">일정관리</NavLi>
          <NavLi href="/audit">회계관리</NavLi>
          <NavLi href="/personel">인사관리</NavLi>
          <NavLi href="/inventory">재고관리</NavLi>
          <NavLi href="/resource">자료관리</NavLi>
        </NavUl>
      </Navbar>
    </header>
    <div class="mx-auto max-w-8xl dark:bg-gray-900 pb-8">
      <slot />
    </div>
  </div>
</main>

<Footer footerType="socialmedia">
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="flex items-center justify-center">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon
        href="https://github.com/shinokada/flowbite-svelte-blocks"
        class="text-gray-400 hover:text-gray-900"
        icon={Github}
      />
    </div>
  </div>
</Footer>
