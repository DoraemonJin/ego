// 基础接口地址
const base = {
    baseUrl:'http://localhost:8888', //基础地址
    login:'/api/login', //登录接口
    projectList:'/api/projectList', //商品列表
    search:'/api/search', //搜索接口
    selectCategory:'/api/backend/itemCategory/selectItemCategoryByParentId', //类目选择
    uploadUrl:'/upload', //上传图片
    addProduct:'/api/backend/item/insertTbItem', //商品添加
    deleteProduct:'/api/backend/item/deleteItemById', //删除商品列表
    updateProduct:'/api/backend/item/updateTbItem', //编辑商品
    getParams:'/api/backend/itemParam/selectItemParamAll', //规格参数列表
    addRulesParams:'/api/backend/itemParam/insertItemParam', //规格参数配置
    getRulesParams:'/api/category/data', //规格参数类目获取
    getAdvertList:'/api/content/selectContentCategoryByParentId', //广告分类内容
    addAdvertChild:'/api/content/insertContentCategory', //增加子广告分类
    addAdvertContent:'/api/content/selectTbContentAllByCategoryId', //增加广告内容
}

export default base