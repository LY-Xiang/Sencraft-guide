<template>
  <article style="padding: 2rem;">
    <title>Builders Guide</title>
    <div class="grid-container" style="padding: 5vh 0;">
      <div style="width: 100%;">
        <ProseH1>
          <Title>
            Builders-guide
          </Title>
        </ProseH1>
      </div>
      <div style="padding-top: 1rem">
        <Join />
      </div>
    </div>


    <Card image-url="https://i.111666.best/image/54f0VD6F0FD5fYX1Bk2Xps.jpg" color="PapayaWhip">
      <CatalogLink to="/we">World●Edit</CatalogLink>
      <CatalogLink to="/arceon">Arceon</CatalogLink>
      <CatalogLink to="/vs">Voxel●Sniper</CatalogLink>
      <CatalogLink to="/ezedits">ezEdits</CatalogLink>
      <i style="font-size: 0.25em;">基础的建筑工具</i>
    </Card>
    <LazyEllipsis />
    <Card 
      image-url="/renders/1.png"
      color="plum">
      <CatalogLink to="/plots/start">地皮插件</CatalogLink>

      <i style="font-size: 0.25em;">灵活的地皮世界，可为地皮配置各种奇妙 <NuxtLink to="/plots/flags">Flags</NuxtLink></i>
    </Card>


  </article>
</template>

<script lang="ts" setup>
import CatalogLink from '~/components/CatalogLink.vue';
import Title from '~/components/Title.vue';


</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  /* 1列宽，适用于小屏幕 */
  gap: 16px;
  /* 可选：设置列之间的间距 */
}

@media (min-width: 1080px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* 2列宽，适用于大屏幕 */
    gap: 2rem;
  }

}
</style>
