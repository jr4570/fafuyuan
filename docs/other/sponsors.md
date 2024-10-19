# 特别赞助

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

// 服务器提供
const 服务器提供 = [
  {
    avatar: '/03.jpg',
    name: '卜粟粟～',
  },
]

// 内务部
const 域名赞助 = [
  {
    avatar: '/04.jpg',
    name: '纳西妲',
  },
]
</script>

## 服务器提供
<VPTeamMembers size="small" :members="服务器提供" />

## 域名赞助
<VPTeamMembers size="small" :members="域名赞助" />