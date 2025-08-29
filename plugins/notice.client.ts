import { defineNuxtPlugin } from '#app';
import { h, ref } from 'vue';
import NoticeModal from '~/components/NoticeModal.vue';

export default defineNuxtPlugin((nuxtApp) => {
  // 控制弹窗显示
  const showNotice = ref(true);
  // 公告内容可自定义
  const noticeTitle = '⚠ 重要公告';
  const noticeContent = `<p>此项目整理部分建筑插件wiki，方便各位查询。
  <br/>我们发现，有个别参与者（其贡献仅限于少数与关键内容无关的PR）在外部进行不实宣传，通过模糊其词的方式，暗示或使他人误认为其是项目的主要负责人。这种夸大自身贡献、企图“空手套白狼”的行为，严重违背了开源精神，并对其他真正付出的贡献者构成了伤害。</p>
  <br/>我们呼吁建筑师们擦亮眼睛，以可验证的事实为依据，切勿轻信任何与贡献记录不符的个人“人设”或宣传。
  `;

  nuxtApp.hook('app:mounted', () => {
    // 动态挂载弹窗到页面
    const app = nuxtApp.vueApp;
    app.component('NoticeModal', NoticeModal);
    // 在根组件渲染弹窗
    const root = app._container || document.body;
    const modal = document.createElement('div');
    root.appendChild(modal);
    // 使用 createVNode + render 动态渲染
    import('vue').then(({ createVNode, render }) => {
      const vnode = createVNode(NoticeModal, {
        show: showNotice.value,
        title: noticeTitle,
        content: noticeContent,
        onClose: () => {
          showNotice.value = false;
          render(null, modal);
        },
      });
      render(vnode, modal);
    });
  });
});
