<script>

	import '../app.css';
  import Nav from '../components/Nav.svelte';
</script>

<body>
  <Nav></Nav>
  <slot></slot>
</body>

<style>
    :global(body) {
        background-color: rgba(21, 20, 20);
        height: 100%;
    }

        /* Hide scrollbar for Chrome, Safari and Opera */
  :global(html)::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  :global(html) {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  } 
</style>