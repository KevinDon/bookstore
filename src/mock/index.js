const  sysConfigs = require('@/lib/sysConfig');
const Mock = require('mockjs'); // 获取mock对象
const Random = Mock.Random; // 获取random对象，随机生成各种数据，具体请翻阅文档
const code = 200; // 返回的状态码

const LoginData = req => {
    let params = JSON.parse(req.body);

    let user = {};
    user.emailAddress = params.account + '@163.com';
    user.billingaddress = '106 Crbbes Creek Road';
    user.firstname = params.account;
    user.suburb = ''
    user.lastname = '2483'
    user.postcode = '0412849600'
    user.phone = '0412849600'
    user.state = 'New soth wales'
    user.website = 'www.budgetfurnitureonline.com au'
    user.country = 'Australia'

    // 返回状态码和文章数据posts
    return {
        code,
        user
    }
}

const sliderData = () => {
    // eslint-disable-next-line no-console
    let data = [{
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_01.jpg'),
            bookName:'天帝纪元',
            title:'天帝纪元'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_02.jpg'),
            bookName:'我在黄泉有座房',
            title:'天帝纪元'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/sliderImages/bookstore_03.jpg'),
            bookName:'超凡世界',
            title:'超凡世界'
        }];

    // 返回状态码和data数据
    return {
        code: 200,
        success: true,
        msg:'The query is successful',
        data: data
    }
};
const keywordData = () => {
    // eslint-disable-next-line no-console
    let data = [{
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/bestseller_01.jpg'),
            bookName:'天帝纪元',
            title:'天帝纪元'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/bestseller_02.jpg'),
            bookName:'我在黄泉有座房',
            title:'天帝纪元'
        },
        {
            id: Random.increment(),
            bookImg: require('_static/images/bestseller/bestseller_03.jpg'),
            bookName:'超凡世界',
            title:'超凡世界'
        }];

    // 返回状态码和data数据
    return {
        code: 200,
        success: true,
        msg:'The query is successful',
        data: data
    }
};

const accountData = () => {
    let data = [{
        account: 'Owen',
        first_name: 'Owen',
        last_name: 'Zheng',
        email:'1845268783@qq.com',
        department:'IT'
    }, {
        account: 'Zico',
        first_name: 'Zico',
        last_name: 'Guo',
        email:'21520993@qq.com',
        department:'IT'
    }, {
        account: 'Kevin',
        first_name: 'Kevin',
        last_name: 'Don',
        email:'kevincn.tang@outlook.com',
        department:'IT - Frontend'
    }];

    return {
        status: 200,
        success: true,
        msg:'The query is successful',
        data :data
    }
}

// 定义请求链接，类型，还有返回数据
Mock.mock(`${sysConfigs.default.server.api.host}/login/`, 'post', LoginData);
Mock.mock(`${sysConfigs.default.server.api.host}/base/books/searchImages.do/`, 'post', sliderData);
Mock.mock(`${sysConfigs.default.server.api.host}/base/books/searchKeyword.do/`, 'post', keywordData);
Mock.mock('http://localhost:8080/api/accounts/list/', 'get', accountData);
