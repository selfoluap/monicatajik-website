<script lang="ts">
  import { onMount } from 'svelte';
  import Scrollbar from 'smooth-scrollbar';
  import { HorizontalScrollPlugin } from '../utils/HorizontalScrollPlugin';
  import { AnchorPlugin } from '../utils/AnchorPlugin';
  import Contact from '../components/Contact.svelte';

  let displayVideosOnly = false;

  const toggleLayout = () => {
    displayVideosOnly = !displayVideosOnly;
  }


  onMount(() => 
  {
    Scrollbar.use(HorizontalScrollPlugin, AnchorPlugin);
    let scroller = document.body;
    Scrollbar.init(scroller, { damping: 0.04, overscrollEffect: "bounce", continuousScrolling: true,});
    Scrollbar.detachStyle();
  } )

</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 80vh;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Center the content horizontally */
    width: 80%; /* Set the width to 80% of the wrapper */
  }

  .text-container > div:not(:last-child) {
    margin-bottom: 10rem; /* Add spacing between the divs */
  }

  .scroll-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 20%; /* Set the width to 20% of the wrapper */
    align-items: center;
  }

  .contact-section {
    height: 100%;
  }

  .section {
    margin: 5rem;
    flex: 0 0 auto; /* Disable flex growth to prevent image stretching */
  }

  img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  .grid-container {
    display: flex;
    flex-direction: row;
  }

  .grid-container img {
    height: 50%;
    object-fit: cover;
  }

  .grid-container .section {
    margin: 0;
    flex-shrink: 3;
  }

</style>


<div>
{#if !displayVideosOnly}
<div class="wrapper">
  <div class="text-container">
    <div>
      <h1 id="name">Monica Tajik</h1>
    </div>

    <div id="text">
      <p>Photoshop editor and video producer</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>

  <div class="scroll-container">
    <section class="section">
      <img src="image1.jpg" alt="Bild 1" />
      <p>Bild 1</p>
    </section>

    <section class="section">
      <img src="image1.jpg" alt="Bild 1" />
      <p>Bild 2</p>
    </section>

    <section class="section">
      <img src="image1.jpg" alt="Bild 1" />
      <p>Bild 3</p>
    </section>

    <section class="section">
      <img src="image1.jpg" alt="Bild 1" />
      <p>Bild 4</p>
    </section>

    <section class="section">
      <img src="image1.jpg" alt="Bild 1" />
      <p>Bild 5</p>
    </section>

    <section class="contact-section">
      <Contact></Contact>
    </section>

  </div>
</div>
{:else}
<div class="grid-container">
  <section class="section">
    <img src="image1.jpg" alt="Bild 1" />
    <p>Bild 1</p>
  </section>

  <section class="section">
    <img src="image1.jpg" alt="Bild 1" />
    <p>Bild 2</p>
  </section>

  <section class="section">
    <img src="image1.jpg" alt="Bild 1" />
    <p>Bild 3</p>
  </section>

  <section class="section">
    <img src="image1.jpg" alt="Bild 1" />
    <p>Bild 4</p>
  </section>

  <section class="section">
    <img src="image1.jpg" alt="Bild 1" />
    <p>Bild 5</p>
  </section>
</div>
{/if}

<button on:click={toggleLayout}>Toggle Layout</button>
</div>