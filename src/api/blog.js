import request from '@/helpers/request'

const URL = {
    GET_LIST:'/blog',
    GET_DETAIL:'/blog/:blogId',
    CREATE:'/blog/:blogId',
    DELETE:'/blog/:blogId'
}

export default {
    getBlogs({ page=1,userId,atIndex } = { page:1 }) {
        return request(URL.GET_LIST,'GET',{ page,userId,atIndex })
    },

    // 满足某些业务场景的封装
    getIndexBlogs({ page=1 } = { page:1 }){
        return this.getBlogs({page,atIndex:true})
    },

    getBlogsByUserId( userId,{ page=1,atIndex } = { page:1 }){
        return this.getBlogs({ userId,page,atIndex })
    },

    getDetail({ blogId }){
        return request(URL.GET_DETAIL.replace(':blogId',blogId))
    },

    updateBlog({ blogId },{ title,content,description,atIndex }){
        return request(URL.UPDATE.replace(':blogId',blogId),'PATCH',{
            title,content,description
        })
    },

    deleteBlog({ blogId }){
        return request(URL.UPDATE.replace(':blogId',blogId),'DELETE')
    },

    createBlog({ title = '', content = '', description = '',atIndex=false } = { title:'',content:'',description:'' }){
        return request(URL.CREATE,'POST',{ title,content,description,atIndex })
    }


}