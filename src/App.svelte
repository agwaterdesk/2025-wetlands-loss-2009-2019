<script>
  import Window from "./components/Window.svelte";
  import WaffleChart from "./components/WaffleChart.svelte";

  // Handle responsive iframes for embeds
  import pym from "pym.js";

  new pym.Child({
    polling: 500,
  });

  function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  let includeCredit = getUrlParameter("credit") != "false";
</script>

<Window />
<!-- Outer div must have class 'chart-container' don't change -->
<div class="chart-container">
  <h1 class="headline">
    Mississippi River Basin wetlands are shrinking, changing
  </h1>

  <p class="dek">
    Between 2009 and 2019, the Mississippi River Basin <b>lost</b> 132,000 acres
    of wetlands overall — but that number hides a deeper concern. An
    <b>additional</b>
    half a million acres of <span class="vegetated">vegetated</span> wetlands
    were lost, the forests and marshes that buffer storms, store carbon, and
    shelter wildlife. In their place, less productive
    <span class="non-vegetated">non-vegetated</span> wetlands like open water and
    mudflats expanded — a shift that signals ecological decline.
  </p>

  <div class="dek legend">
    <div class="unit"></div>
    = 1,000 acres
  </div>
  <p class="sr-only">
    Chart showing wetland change in the Mississippi River Basin from 2009 to
    2019. A net loss of 132,000 acres hides a deeper shift: 453,000 acres of
    vegetated wetlands were lost, while 345,000 acres of less productive
    non-vegetated wetlands were gained. Each square represents 1,000 acres.
  </p>

  <div id="g-viz">
    <WaffleChart />
  </div>

  {#if includeCredit}
    <div class="credit">
      Data: U.S. Fish and Wildlife Service; Graphic by Jared Whalen /
      <a target="_blank" href="https://agwaterdesk.org/">Ag & Water Desk</a>
    </div>
  {/if}
</div>

<style lang="scss">
  :root {
    --color-gain: #888;
    --color-loss: #ee6352;
  }

  .chart-container {
    max-width: 800px;
    width: 100%;
    padding: 0.5rem;

    #g-viz {
      width: 100%;
      margin-bottom: 1rem;

      .dek {
      }
    }
  }

  span.vegetated {
    color: var(--color-loss);
    font-weight: 900;
  }

  span.non-vegetated {
    color: var(--color-gain);
    font-weight: 900;
  }

  .legend {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .unit {
      width: 15px;
      height: 15px;
      border: 1px solid #000;
    }
  }
</style>
