import Configs from '@/lib/sysConfig'
const router = [];
//  动态加载路由
for (let index in Configs.system.router.pages) {
    let item = Configs.system.router.pages[index];
    router.push({
        path: item.path,
        name: item.name,
        meta: {...item, title:item.title},
        component: () => import('_components/' + item.component_name)
    })
}
export default router
