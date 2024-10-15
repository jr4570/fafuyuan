# 本院人員

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

// 院長及副院長
const 院長及副院長 = [
  {
    avatar: '/01.jpg',
    name: '汝可知jr',
    title: '院長',
  },
  {
    avatar: '/02.jpg',
    name: '阿斯托洛吉斯•德丽莎•梅姬斯图斯',
    title: '副院長',
  },
]

// 董事長
const 董事長 = [
  {
    avatar: '/01.jpg',
    name: '汝可知jr',
  },
  {
    avatar: '/03.jpg',
    name: '卜粟粟～',
  },
  {
    avatar: '/04.jpg',
    name: '纳西妲',
  },
  {
    avatar: '/05.jpg',
    name: 'P·A·I·M·O·N',
  },
]

// 各科主任
const 各科主任 = [
  { avatar: '/03.jpg', name: '卜粟粟～', title: '戒網癮科主任' },
  { avatar: '/06.jpg', name: '云生', title: '精神與危重症科主任' },
  { avatar: '/07.jpg', name: '/帕姆爱邦布', title: '生物解剖科主任' },
  { avatar: '/08.jpg', name: '不是星的星', title: '急診主任' },
  { avatar: '/09.jpg', name: '群…琴师，时不时…出来弹…琴', title: '中医主任' },
  { avatar: '/10.jpg', name: '神话筱樱', title: '心理科主任' },
  { avatar: '/11.jpg', name: '泪殇', title: '外科主任' },
  { avatar: '/12.jpg', name: '纳西妲', title: '兒科主任' },
  { avatar: '/13.jpg', name: '玛卡巴卡', title: '麻醉科主任' },
  { avatar: '/14.jpg', name: 'CR400BF-GZ-5204', title: '神经科主任' },
  { avatar: '/15.jpg', name: '汝可知然', title: '骨科主任' },
  { avatar: '/16.jpg', name: 'Fairy (群猫猫) ', title: '脑科主任' },
  { avatar: '/26.jpg', name: '梦之蓝 ', title: '眼科主任' },
]

// 外院专家组
const 外院专家组 = [
  {
    avatar: '/05.jpg',
    name: 'P·A·I·M·O·N',
    title: '主任',
  },
]

// 宣發科主任及副主任
const 宣發科主任及副主任 = [
  {
    avatar: '/17.jpg',
    name: '格蕾修「记者」',
    title: '主任',
  },
  {
    avatar: '/18.jpg',
    name: '爱发电的小电鳗 Man',
    title: '副主任',
  },
]

// 保卫科人員
const 保卫科 = [
  {
    avatar: '/19.jpg',
    name: '名侦探柯北',
    title: '队长',
  },
]

// 内务部
const 内务部 = [
  {
    avatar: '/25.jpg',
    name: '猫娘老祖',
    title: '部长',
  },
]

// 住院部
const 住院部 = [
  {
    avatar: '/24.jpg',
    name: '南山无梅落',
    title: '主任',
  },
]

// 院發言人
const 院發言人 = [
  {
    avatar: '/20.jpg',
    name: 'HJURTYwww',
    title: '發言人',
  },
]

// 訊息科主任及副主任
const 訊息科主任及副主任 = [
  {
    avatar: '/21.jpg',
    name: '流雲 澄',
    title: '主任',
  },
  {
    avatar: '/22.jpg',
    name: 'Zhaozhao',
    title: '副主任',
  },
]

// 入院服务
const 入院服务 = [
  {
    avatar: '/23.jpg',
    name: 'K·A·Z·U·H·A',
    title: '服务人员',
  },
]

</script>

## 院長及副院長
<VPTeamMembers size="small" :members="院長及副院長" />

## 董事長
<VPTeamMembers size="small" :members="董事長" />

## 各科主任
<VPTeamMembers size="small" :members="各科主任" />

## 外院专家组
<VPTeamMembers size="small" :members="外院专家组" />

## 宣發科主任及副主任
<VPTeamMembers size="small" :members="宣發科主任及副主任" />

## 保卫科
<VPTeamMembers size="small" :members="保卫科" />

## 内务部
<VPTeamMembers size="small" :members="内务部" />

## 住院部
<VPTeamMembers size="small" :members="住院部" />

## 院發言人
<VPTeamMembers size="small" :members="院發言人" />

## 訊息科主任及副主任
<VPTeamMembers size="small" :members="訊息科主任及副主任" />

## 入院服务
<VPTeamMembers size="small" :members="入院服务" />