<script>
  import { scaleLinear } from "d3-scale";
  import lossData from "../data/loss.json";
  import { windowWidth } from "$stores/global";

  console.log(lossData);
  const vegetatedLoss = lossData.find((item) => item.type === "Vegetated").loss;
  const nonVegetatedLoss = lossData.find(
    (item) => item.type === "Non-Vegetated"
  ).loss;

  const unitsPerSquare = 1000; // Each square represents 1k acres
  let chartWidth = $state(0);
  let chartHeight = $state(0);

  let isMobile = $derived($windowWidth < 500);

</script>

{#snippet annotation(type)}
  <div class="annotation {type}">
    {#if type === "gain"}
      <div class="value">
        +{Math.abs(vegetatedLoss).toLocaleString()} acres in non-vegetated wetlands
      </div>
      <div class="detail">Open water and artificial ponds increased.</div>
    {/if}
    {#if type === "loss"}
      <div class="value">
        -{Math.abs(nonVegetatedLoss).toLocaleString()} acres of vegetated wetlands
      </div>
      <div class="detail">
        Forested and marshy wetlands, home to wildlife and vital for flood
        control and water quality, were lost.
      </div>
    {/if}
  </div>
{/snippet}

{#if isMobile}
  {@render annotation("gain")}
{/if}
<div class="chart-container">
  <div class="chart-grid">
    <div class="axis" style:--axis-height="{chartHeight}px">
      <div class="tick" data-value="300"><span>+300k</span></div>
      <div class="tick" data-value="200"><span>+200k</span></div>
      <div class="tick" data-value="100"><span>+100k</span></div>
      <div class="tick" data-value="0"><span>0</span></div>
      <div class="tick" data-value="-100"><span>-100k</span></div>
      <div class="tick" data-value="-200"><span>-200k</span></div>
      <div class="tick" data-value="-300"><span>-300k</span></div>
      <div class="tick" data-value="-400"><span>-400k</span></div>
    </div>

    <div
      class="chart"
      bind:clientWidth={chartWidth}
      bind:clientHeight={chartHeight}
    >
      <div class="gain panel">
        {#each Array(Math.floor(vegetatedLoss / unitsPerSquare)) as _}
          <div class="unit"></div>
        {/each}
      </div>

      <div class="loss panel">
        {#each Array(Math.abs(Math.floor(nonVegetatedLoss / unitsPerSquare))) as _}
          <div class="unit"></div>
        {/each}
      </div>
    </div>

    {#if !isMobile}
      <div class="annotations">
        {@render annotation("gain")}
        {@render annotation("loss")}
      </div>
    {/if}
  </div>
</div>

{#if isMobile}
  {@render annotation("loss")}
{/if}

<style lang="scss">
  .chart-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .chart-grid {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
    align-items: center;
  }

  .axis {
    display: grid;
    grid-template-rows: repeat(41, 1fr); // Match total rows in chart (roughly)
    height: var(--axis-height);
    padding: 0 10px;

    .tick {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      span {
        font-size: 12px;
        height: 0px;
        color: #666;
        font-family: "Oswald", sans-serif;
        margin-bottom: 10%;
      }

      &[data-value="300"] {
        grid-row: 3;
      }
      &[data-value="200"] {
        grid-row: 8;
      }
      &[data-value="100"] {
        grid-row: 13;
      }
      &[data-value="0"] {
        grid-row: 18;
      }
      &[data-value="-100"] {
        grid-row: 24;
      }
      &[data-value="-200"] {
        grid-row: 29;
      }
      &[data-value="-300"] {
        grid-row: 34;
      }
      &[data-value="-400"] {
        grid-row: 39;
      }
    }
  }

  .chart {
    width: 100%;

    display: flex;
    flex-direction: column;

    .panel {
      width: 100%;
      height: 50%;
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      flex-wrap: wrap;
      align-content: flex-start;
      box-sizing: border-box;
      gap: 1px;
      padding: 0px 5px;

      &.gain {
        direction: ltr; /* items flow left to right */
        justify-content: start; /* align items to the left */
        align-content: end; /* stack rows from bottom */
        transform: scaleY(-1);

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-top: 2px solid #000;
        }

        .unit {
          background: var(--color-gain);
          opacity: 0.75;
        }
      }

      &.loss {
        .unit {
          background: var(--color-loss);
          opacity: 0.75;
        }
      }

      .unit {
        aspect-ratio: 1 / 1;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    }
  }

  .annotations {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 250px;
    height: 100%;
    justify-content: space-between;
  }

  .annotation {
    padding: 2rem 0px;
    border-radius: 4px;

    &.gain {
      color: var(--color-gain);
      @media (max-width: 500px) {
        padding: 0px 0px 1rem 0px;
      }
    }

    &.loss {
      color: var(--color-loss);
      @media (max-width: 500px) {
        padding: 1rem 0px 1rem 0px;
      }
    }

    .value {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 0.25rem;
    }

    .label {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 0.5rem;
    }

    .detail {
      font-size: 13px;
      color: #666;
      line-height: 1.4;
    }
  }
</style>
