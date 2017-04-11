function e(t) {
    var n, r = this;
    var test = 21;
    var test1 = true;
    this.trackingClick = false;
    this.trackingClickStart = 0;
    this.onClick = function () {
        return e.prototype.onClick.apply(r, arguments);
    };
    this.onMouse = function () {
        return e.prototype.onMouse.apply(r, arguments);
    };
    this.deviceIsAndroid && (t.addEventListener('mouseover', this.onMouse, true), t.addEventListener('mousedown', this.onMouse, true), t.addEventListener('mouseup', this.onMouse, true));
    t.addEventListener('click', this.onClick, true);
    t.addEventListener('touchstart', this.onTouchStart, false);
    t.addEventListener('touchend', this.onTouchEnd, false);
    t.addEventListener('touchcancel', this.onTouchCancel, false);
    Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, r) {
        var i = Node.prototype.removeEventListener;
        if (e === 'click') {
            i.call(t, e, n.hijacked || n, r);
        } else {
            i.call(t, e, n, r);
        }
    }, t.addEventListener = function (e, n, r) {
        var i = Node.prototype.addEventListener;
        if (e === 'click') {
            i.call(t, e, n.hijacked || (n.hijacked = function (e) {
                    e.propagationStopped || n(e);
                }), r);
        } else {
            i.call(t, e, n, r);
        }
    });
    typeof t.onclick == 'function' && (n = t.onclick, t.addEventListener('click', function (e) {
        n(e);
    }, false), t.onclick = null);
    this.onTouchEnd = function () {
        return e.prototype.onTouchEnd.apply(r, arguments);
    };
    this.onTouchCancel = function () {
        return e.prototype.onTouchCancel.apply(r, arguments);
    };
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.lastTouchIdentifier = 0;
    this.layer = t;
    if (!t || !t.nodeType) {
        throw new TypeError('Layer must be a document node');
    }
    this.onClick = function () {
        return e.prototype.onClick.apply(r, arguments);
    }, this.onMouse = function () {
        return e.prototype.onMouse.apply(r, arguments);
    }, this.onTouchStart = function () {
        return e.prototype.onTouchStart.apply(r, arguments);
    }, this.onTouchEnd = function () {
        return e.prototype.onTouchEnd.apply(r, arguments);
    }, this.onTouchCancel = function () {
        return e.prototype.onTouchCancel.apply(r, arguments);
    };
    if (e.notNeeded())
        return;
    this.deviceIsAndroid && (t.addEventListener('mouseover', this.onMouse, true), t.addEventListener('mousedown', this.onMouse, true), t.addEventListener('mouseup', this.onMouse, true)), t.addEventListener('click', this.onClick, true), t.addEventListener('touchstart', this.onTouchStart, false), t.addEventListener('touchend', this.onTouchEnd, false), t.addEventListener('touchcancel', this.onTouchCancel, false), Event.prototype.stopImmediatePropagation || (t.removeEventListener = function (e, n, r) {
        var i = Node.prototype.removeEventListener;
        if (e === 'click') {
            i.call(t, e, n.hijacked || n, r);
        } else {
            i.call(t, e, n, r);
        }
    }, t.addEventListener = function (e, n, r) {
        var i = Node.prototype.addEventListener;
        if (e === 'click') {
            i.call(t, e, n.hijacked || (n.hijacked = function (e) {
                    e.propagationStopped || n(e);
                }), r);
        } else {
            i.call(t, e, n, r);
        }
    }), typeof t.onclick == 'function' && (n = t.onclick, t.addEventListener('click', function (e) {
        n(e);
    }, false), t.onclick = null);
}
define('com.csair.mbp/config', [], function () {
    return {
        mbp_server: '',
        mbp_token: 'E0xywTTmPMVVPd5B8u4cPvBMW2B4ZKPwpZ194hyuI%2FoDWG35pqOxAw%3D%3D',
        cube_server: 'http://58.215.176.89:9000',
        wx_api: '',
        was_server: '',
        pay_callBack_url: '/touch/com.csair.mbp.index/index.html#UPPPAY/CALLBACK/',
        upp_pay_way: 'ALIM,EPY,WX,ECARD,ONE,MASTER,VISA,DINNERS,JCB,AMEX',
        rsakeys: function () {
            return this.mbp_server + '/cryption/generateKeypair.shtml';
        },
        mbp: function (e) {
            return this.mbp_server + e;
        },
        cube: function (e) {
            return this.cube_server + e;
        },
        wx: function (e) {
            return this.wx_api + e;
        }
    };
});
define('com.csair.mbp/nls/mbp', {
    root: {
        language: 'en-us',
        locale: 'en-us',
        mbp_ok: 'OK',
        mbp_tips: 'Tips',
        mbp_unknow_error: 'Unknow error',
        mbp_please_wait: 'Please wait...',
        mbp_al_back: '',
        mbp_al_airportlist: 'City Airpot List',
        mbp_al_domestic: 'Domestic',
        mbp_al_international: 'International',
        mbp_al_loadText: 'Loading...',
        mbp_al_searchText: 'Chinese/Pinyin/English',
        checkin_queryTipsforCheckin: 'Sorry! Based on your information, suitable segment for you to check in can\'t be found, please check in at airport counter.',
        mbp_hasnoflight: 'No flight information',
        mbp_hotcity: 'Hot',
        mbp_historycity: 'History'
    },
    'en-us': true,
    'zh-cn': true
});
define('com.csair.mbp/nls/zh-cn/mbp', {
    language: 'zh-cn',
    locale: 'zh-cn',
    mbp_ok: '确定',
    mbp_tips: '提示',
    mbp_unknow_error: '未知错误',
    mbp_please_wait: '请稍候...',
    mbp_al_back: '',
    mbp_al_airportlist: '城市机场列表',
    mbp_al_domestic: '国内城市',
    mbp_al_international: '港澳台/国际',
    mbp_al_loadText: '加载中...',
    mbp_al_searchText: '中文/拼音/英文',
    checkin_queryTipsforCheckin: '抱歉!根据您提供的资料暂无法找到适合办理值机的航段,请至机场南航柜台办理',
    mbp_hasnoflight: '暂无航班信息',
    mbp_hotcity: '热门',
    mbp_historycity: '历史',
    recall_interface_warn: '服务器繁忙\uFF0C请您稍后再试\uFF01',
    error_403: '大家太热情了\uFF01系统加速中\uFF0C请稍后再试\uFF01(403)'
});
define('com.csair.mbp/mbpserver', [
    'zepto',
    '../com.csair.mbp/config',
    'cube/cube',
    'i18n!com.csair.mbp/nls/mbp'
], function (e, t, n, r) {
    return {
        post: function (i, s) {
            var o = r.mbp_please_wait;
            i.loadingMsg && (o = i.loadingMsg);
            var u, a = i.url, f = '0';
            i.isInviteUpCabin && (f = '1');
            a.indexOf('/CSMBP/data/CustomerService/refundSearchJson.do') != -1 ? timeout = 600000 : timeout = 300000;
            var l = a;
            a != 'CSMBP/data/monitor/accessLog.do' && (a != 'CSMBP/data/order/getAvPriceForJson.do' && a != 'CSMBP/data/order/getUserOrders.do' && a != 'CSMBP/data/order/queryFlightByNo.do?type=MOBILE' && a != 'CSMBP/data/order/queryFlightByAirport.do?type=MOBILE' && a != 'CSMBP/data/order/account/queryMileage.do' || i.id != 'weixinPromote' || n.I18n.getLocale() != 'zh-cn' ? i.cancelable === false ? u = new n.Loader({
                text: o,
                cancelable: false
            }) : a.indexOf('/CSMBP/data/order/getAirLineMinPriceJson.do') > -1 ? u = new n.Loader({
                text: o,
                cancelable: true,
                isShowConfig: 'false'
            }) : u = new n.Loader({
                text: o,
                cancelable: true
            }) : u = new n.Loader({
                text: i.text,
                cancelable: true,
                id: 'weixinPromote'
            }));

            c.length < 2 ? a += '?' : a += '&';
            a += 'type=MOBILE&token=' + t.mbp_token;
            n.I18n.getLocale() && (h = n.I18n.getLocale().split('-')[0]);
            a += '&lang=' + h;
            var h = 'en';
            n.I18n.getLocale() && (h = n.I18n.getLocale().split('-')[0]), a += '&lang=' + h;
            var p = window.location.origin, d = n.Session.loadObject('user'), v = {
                url: a,
                page: JSON.stringify(i.params),
                pagebase: p
            };
            d && d.page && (v.loginuser = JSON.stringify(d.page));
            if (s == 1) {
                n.RSA.desAjax(g);
            } else {
                e.ajax(g);
            }
            i.params.asyncType == 0 && (m = i.params.asyncType);
            var g = {
                block: true,
                timeout: timeout,
                async: m,
                traditional: true,
                url: t.mbp_server + '/mbpwas.shtml?lang=' + h,
                type: 'POST',
                data: v,
                cache: false,
                dataType: 'json',
                success: function (e, t, s) {
                    if (l != 'CSMBP/data/monitor/accessLog.do') {
                        if (u.isCanceled())
                            return;
                        u.hide();
                    }
                    if (e) {
                        var o, c;
                        e.page && (o = e.page.MESSAGE, c = e.page.errmessage);
                        if (a.indexOf('getSectorsByTicketNo.do') > -1 && i.success) {
                            i.success(e, t, s);
                            return;
                        }
                        if (o && o == 'nologin' && f == '0') {
                            Backbone.history.navigate('/com.csair.mbp.login/', { trigger: true });
                            return;
                        }
                        if (o && o.indexOf('Exception') != -1 || null != c && '' != c || o != null) {
                            var h;
                            o && o.indexOf('Exception') != -1 && (h = o.substring(0, o.length));
                            null != c && '' != c && (h = c);
                            o != null && (h = o);
                            if (a.indexOf('/CSMBP/data/order/account/commonRiderJson.do') > -1 && h == 'success' || a.indexOf('CSMBP/data/wallet/myWalletPay.do') > -1 || a.indexOf('CSMBP/data/payment/TEN/executeWebPaymentJson.do') > -1) {
                                i.success && i.success(e, t, s);
                                return;
                            }
                            a.indexOf('/CSMBP/data/order/getAirLineMinPriceJson.do') < 0 && new n.Dialog({
                                autoshow: true,
                                target: 'body',
                                title: r.mbp_tips,
                                content: h
                            }, {
                                configs: [{
                                    title: r.mbp_ok,
                                    eventName: 'ok'
                                }],
                                ok: function () {
                                }
                            });
                            return;
                        }
                        i.success && i.success(e, t, s);
                        return;
                    }
                    if (l == '/CSMBP/data/CustomerService/getUpCabinChangePriceJson.do') {
                        new n.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: r.mbp_tips,
                            content: r.mbp_hasnoflight
                        }, {
                            configs: [{
                                title: r.mbp_ok,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        });
                        return;
                    }
                    if (l == '/CSMBP/data/config/switches.do')
                        return;
                    new n.Dialog({
                        autoshow: true,
                        target: 'body',
                        title: r.mbp_tips,
                        content: r.mbp_unknow_error + ': ' + JSON.stringify(e)
                    }, {
                        configs: [{
                            title: r.mbp_ok,
                            eventName: 'ok'
                        }],
                        ok: function () {
                        }
                    });
                    return;
                },
                error: function (e, t, s) {
                    if (l != 'CSMBP/data/monitor/accessLog.do') {
                        if (u.isCanceled())
                            return;
                        u.hide();
                    }
                    if (e && e.status == '403') {
                        new n.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: r.mbp_tips,
                            content: r.error_403
                        }, {
                            configs: [{
                                title: r.mbp_ok,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        });
                        return;
                    }
                    i.error && i.error(e, t, s);
                }
            };
            s == 1 ? n.RSA.desAjax(g) : e.ajax(g);
        },
        postNew: function (i, s) {
            var o = r.mbp_please_wait;
            i.loadingMsg && (o = i.loadingMsg);
            var u, a = i.url, f = '0';
            i.isInviteUpCabin && (f = '1');
            a.indexOf('/CSMBP/data/CustomerService/refundSearchJson.do') != -1 ? timeout = 60000 : a.indexOf('CSMBP/data/service/lead/getCoupon.do') != -1 ? timeout = 5000 : a.indexOf('CSMBP/data/insurance/getInsuranceInfo.do') != -1 ? timeout = 3000 : timeout = 90000;
            var l = a;
            a != 'CSMBP/data/monitor/accessLog.do' && (a != 'CSMBP/data/order/getAvPriceForJson.do' && a != 'CSMBP/data/order/getUserOrders.do' && a != 'CSMBP/data/order/queryFlightByNo.do?type=MOBILE' && a != 'CSMBP/data/order/queryFlightByAirport.do?type=MOBILE' && a != 'CSMBP/data/order/account/queryMileage.do' || i.id != 'weixinPromote' || n.I18n.getLocale() != 'zh-cn' ? i.cancelable === false ? u = new n.Loader({
                text: o,
                cancelable: false
            }) : a.indexOf('/CSMBP/data/order/getAirLineMinPriceJson.do') > -1 || a.indexOf('/CSMBP/data/service/lead/getCouponWhenException.do') > -1 ? u = new n.Loader({
                text: o,
                cancelable: true,
                isShowConfig: 'false'
            }) : u = new n.Loader({
                text: o,
                cancelable: true
            }) : u = new n.Loader({
                text: i.text,
                cancelable: true,
                id: 'weixinPromote'
            }));
            if (c.length < 2) {
                a += '?';
            } else {
                a += '&';
            }
            c.length < 2 ? a += '?' : a += '&';
            n.Session.loadObject('isWinXin') && (h = n.Session.loadObject('weixinChanel'));
            a += 'type=MOBILE&token=' + t.mbp_token + '&APPTYPE=touch' + '&chanel=' + h;
            n.I18n.getLocale() && (d = n.I18n.getLocale().split('-')[0]);
            a += '&lang=' + d;
            var p = n.Session.loadObject('user'), d = 'en';
            n.I18n.getLocale() && (d = n.I18n.getLocale().split('-')[0]), a += '&lang=' + d;
            b = 'POST';
            y = m;
            if (s == 1) {
                var g = JSON.stringify(i.params);
                m = n.RSA.desStr(g);
            } else
                m = JSON.stringify(i.params);
            var y = {}, b = '';
            b = 'POST', y = m;
            var w = true;
            i.params.asyncType == 0 && (w = i.params.asyncType);
            var E = {
                block: true,
                timeout: timeout,
                async: w,
                traditional: true,
                url: a,
                type: b,
                data: y,
                cache: false,
                dataType: 'json',
                contentType: 'application/json;charset=utf-8',
                success: function (e, t, s) {
                    if (l != 'CSMBP/data/monitor/accessLog.do') {
                        if (u.isCanceled())
                            return;
                        u.hide();
                    }
                    if (e) {
                        var o, c;
                        e.page && (o = e.page.MESSAGE, c = e.page.errmessage);
                        if (a.indexOf('getSectorsByTicketNo.do') > -1 && i.success) {
                            i.success(e, t, s);
                            return;
                        }
                        if (o && o == 'nologin' && f == '0') {
                            Backbone.history.navigate('/com.csair.mbp.login/', { trigger: true });
                            return;
                        }
                        if (o && o.indexOf('Exception') != -1 || null != c && '' != c || o != null) {
                            var h;
                            o && o.indexOf('Exception') != -1 && (h = o.substring(0, o.length));
                            null != c && '' != c && (h = c);
                            o != null && (h = o);
                            if (a.indexOf('/CSMBP/data/order/account/commonRiderJson.do') > -1 && h == 'success') {
                                i.success && i.success(e, t, s);
                                return;
                            }
                            a.indexOf('/CSMBP/data/order/getAirLineMinPriceJson.do') < 0 && new n.Dialog({
                                autoshow: true,
                                target: 'body',
                                title: r.mbp_tips,
                                content: h
                            }, {
                                configs: [{
                                    title: r.mbp_ok,
                                    eventName: 'ok'
                                }],
                                ok: function () {
                                }
                            });
                            return;
                        }
                        i.success && i.success(e, t, s);
                        return;
                    }
                    if (l == '/CSMBP/data/CustomerService/getUpCabinChangePriceJson.do') {
                        new n.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: r.mbp_tips,
                            content: r.mbp_hasnoflight
                        }, {
                            configs: [{
                                title: r.mbp_ok,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        });
                        return;
                    }
                    if (l == '/CSMBP/data/config/switches.do')
                        return;
                    new n.Dialog({
                        autoshow: true,
                        target: 'body',
                        title: r.mbp_tips,
                        content: r.mbp_unknow_error + ': ' + JSON.stringify(e)
                    }, {
                        configs: [{
                            title: r.mbp_ok,
                            eventName: 'ok'
                        }],
                        ok: function () {
                        }
                    });
                    return;
                },
                error: function (e, t, s) {
                    if (l != 'CSMBP/data/monitor/accessLog.do') {
                        if (u.isCanceled())
                            return;
                        u.hide();
                    }
                    if (e && e.status == '403') {
                        new n.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: r.mbp_tips,
                            content: r.recall_interface_warn
                        }, {
                            configs: [{
                                title: r.mbp_ok,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        });
                        return;
                    }
                    i.error && i.error(e, t, s);
                }
            };
            e.ajax(E);
        }
    };
});
define('com.csair.mbp.login/nls/locale', {
    root: {
        btn_back: '取消',
        welcome_login: '欢迎登陆',
        login: '登陆',
        username: '用户名',
        account_number: '帐号',
        password: '密码',
        remember_account: '记住帐号',
        forgetpsd: '找回密码',
        regist_member: '申请会员',
        regist_mingzhuka: '申请明珠卡成为明珠会员',
        bind_phone: '绑定手机',
        member_card_no: '会员卡号',
        bind_email: '绑定mail',
        get_psd_way: '取回密码方式',
        send_now: '马上发送',
        sign_in: '注册',
        zh_fullname: '中文全名',
        gentleman: '先生',
        lady: '女士',
        address: '称呼',
        en_firstname: '英文名',
        en_lastname: '英文姓',
        birthday: '生日',
        paper_type: '证件类型',
        id_card: '身份证',
        passport: '护照',
        other_paper: '其他证件',
        paper_no: '证件号',
        phone_num: '手机号',
        confirm_password: '确认密码',
        choose_mobile: '选择手机号作为明珠会员卡号后11位',
        accept_prototype: '阅读并接受服务协议',
        submit: '提交',
        required_input: '必填',
        required_input_pinyinxing: '必填,拼音姓',
        required_input_pinyinming: '必填,拼音名',
        option_input: '选填',
        tips: '提示',
        accept_prototype_tips: '请阅读并接受服务协议',
        password_not_the_same: '密码不一致,请重新输入',
        cant_be_empty: '不能为空',
        submit_success: '提交成功\u3002',
        submit_failed: '提交失败,请检查网络配置\u3002',
        login_loginfailed: '登录失败\uFF01请检查用户名和密码\u3002',
        login_loadingText: '登录中',
        login_failedForConnection: '登陆失败\uFF01请检查网络连接',
        login_failedForPsd: '登录失败\uFF01请检查用户名和密码\u3002',
        yes: '知道了',
        logout: '登出',
        mainPage: '首页',
        forgetpsd_memberNoNull: '会员号不能为空\uFF01',
        forgetpsd_phoneNoNull: '绑定手机号不能为空!',
        forgetpsd_emailNoNull: '绑定Email不能为空!',
        forgetpsd_oSuccess1: 'The password has been sent to the designated mobile, please check it.',
        forgetpsd_oSuccess2: 'The password has been sent to the designated E-mail, please check it.',
        regist_success1: '操作成功,您的常客卡号是',
        regist_success2: ',请记录该卡号并使用该卡号进行登录!',
        login_psd_incorrect: '用户名和密码不能为空',
        login_name_null: '请输入会员号或证件号或用户名',
        login_secret_null: '请输入密码',
        birthday_error: '目前我们只接受12周岁以上人员入会',
        cnFullName_isNotAllCn_tip: '中文姓名只允许输入中文字符',
        cnFullName_lengthWrong_tip: '中文姓名长度为2~9个汉字',
        en_lastnameTip: '英文姓只允许输入英文字符和空格',
        en_firstnameTip: '英文名只允许输入英文字符和空格',
        en_lastname_en_firstnameTip: '英文名或英文姓至少2个字符',
        en_lastname_en_firstnameTiplength: '英文名和英文姓长度应该为4~55个字符',
        cnFullName_lengthWrong_tip: '中文姓名长度为2~9个汉字',
        logout_tips: '确定要退出登录\uFF1F',
        logout_yes: '确定',
        logout_cancle: '取消',
        account_placeholder: '会员号/证件号/用户名',
        password_placeholder: '请输入密码',
        vipUser: '会员登录',
        noneVipUser: '非会员登录',
        phoneOrmail: '手机',
        code: '验证码',
        getCode: '获取验证码',
        input: '请输入',
        inputCode: '请输入验证码',
        contactNum_null: '手机号码或者邮箱格式不正确\uFF0C请按以下格式输入\uFF1A\uFF08手机号码\uFF1A11为数字\uFF1B邮箱\uFF1Axxx@xxx)',
        codeNum_null: '请输入验证码',
        networkbad: '连接超时\uFF0C请检查网络状况',
        sendCode: '验证码已发送',
        wx_tip: '温馨提示\uFF1A为保证您的合法权益\uFF0C请使用南航官网\u3001APP和微信号\u3002关注南航微信公众号CS95539\uFF0C享受购票\u3001值机\u3001查航班动态与里程信息服务\u3002',
        other_login: '或通过第三方登陆'
    },
    'en-us': true,
    'zh-cn': true
});
define('com.csair.mbp.login/nls/zh-cn/locale', {
    Login_language: 'zh-cn',
    language: 'zh-cn',
    btn_back: '取消',
    btn_back1: '',
    welcome_login: '欢迎登录',
    login: '登录',
    tips: '提示',
    ok: '知道了',
    username: '用户名',
    account_number: '帐号',
    password: '密码',
    remember_account: '记住帐号',
    forgetpsd: '找回密码',
    regist_member: '申请会员',
    regist_mingzhuka: '申请明珠卡成为明珠会员',
    bind_phone: '绑定手机',
    member_card_no: '会员卡号',
    bind_email: '绑定mail',
    get_psd_way: '取回密码方式',
    send_now: '马上发送',
    sign_in: '注册',
    zh_fullname: '中文全名',
    gentleman: '先生',
    lady: '女士',
    address: '称呼',
    en_firstname: '英文名',
    en_lastname: '英文姓',
    birthday: '生日',
    paper_type: '证件类型',
    id_card: '身份证',
    passport: '护照',
    other_paper: '其他证件',
    paper_no: '证件号',
    phone_num: '手机号',
    confirm_password: '确认密码',
    choose_mobile: '选择手机号作为明珠会员卡号后11位',
    accept_prototype: '阅读并接受服务协议',
    submit: '提交',
    required_input: '必填',
    required_input_pinyinxing: '必填,拼音姓',
    required_input_pinyinming: '必填,拼音名',
    option_input: '选填',
    tips: '提示',
    accept_prototype_tips: '请阅读并接受服务协议',
    password_not_the_same: '密码不一致,请重新输入',
    cant_be_empty: '不能为空',
    submit_success: '提交成功\u3002',
    submit_failed: '提交失败,请检查网络配置\u3002',
    login_loginfailed: '登录失败\uFF01请检查用户名和密码\u3002',
    login_loadingText: '登录中',
    login_failedForConnection: '登录失败\uFF01请检查网络连接',
    login_failedForPsd: '登录失败\uFF01请检查用户名和密码\u3002',
    yes: '知道了',
    logout: '登出',
    mainPage: '首页',
    forgetpsd_memberNoNull: '会员号不能为空\uFF01',
    forgetpsd_phoneNoNull: '绑定手机号不能为空!',
    forgetpsd_emailNoNull: '绑定Email不能为空!',
    forgetpsd_emailFalse: '输入的Email格式有误\uFF0C请重新输入',
    forgetpsd_oSuccess1: '密码已经发送到您的手机\uFF0C请查收',
    forgetpsd_oSuccess2: '密码已经发送到您的邮箱\uFF0C请查收',
    login_psd_incorrect: '用户名和密码不能为空',
    regist_success1: '操作成功,您的常客卡号是',
    regist_success2: '您的资料正在审核,新注册的会员号暂时无法登录购票,在此期间您可以使用非会员登录方式购票\u3002',
    login_psd_incorrect: '用户名和密码不能为空',
    login_name_null: '请输入会员号或证件号或用户名',
    login_secret_null: '请输入密码',
    cnFullName_isNotAllCn_tip: '中文姓名只允许输入中文字符',
    cnFullName_lengthWrong_tip: '中文姓名长度为2~9个汉字',
    en_lastnameTip: '英文姓只允许输入英文字符和空格',
    en_firstnameTip: '英文名只允许输入英文字符和空格',
    en_lastname_en_firstnameTip: '英文名或英文姓至少2个字符',
    en_lastname_en_firstnameTiplength: '英文名和英文姓长度应该为4~55个字符',
    cnFullName_lengthWrong_tip: '中文姓名长度为2~9个汉字',
    logout_tips: '确定要退出登录\uFF1F',
    logout_yes: '确定',
    logout_cancle: '取消',
    account_placeholder: '手机/邮箱/会员号/证件号',
    password_placeholder: '请输入密码',
    birthday_error: '目前我们只接受12周岁以上人员入会',
    vipUser: '会员登录',
    noneVipUser: '非会员登录',
    phoneOrmail: '手机',
    code: '验证码',
    getCode: '获取验证码',
    input: '请输入',
    inputCode: '请输入验证码',
    contactNum_null: '手机号码或者邮箱格式不正确\uFF0C请按以下格式输入\uFF1A\uFF08手机号码\uFF1A11为数字\uFF1B邮箱\uFF1Axxx@xxx)',
    codeNum_null: '请输入验证码',
    codeNum_null: '请输入验证码',
    networkbad: '连接超时\uFF0C请检查网络状况',
    sendCode: '验证码已发送',
    registZh_LNh: '输入中文或字母',
    registZh_LN: '中文姓',
    registZh_LNT: '请输入中文姓',
    regist_given: '姓氏拼音',
    regist_givenT: '请输入姓氏拼音',
    regist_givenW: '姓氏拼音至少两个字符',
    registZh_FN: '中文名',
    registZh_FNT: '请输入中文名',
    regist_surname: '名字拼音',
    regist_surnameT: '请输入名字拼音',
    regist_surnameW: '名字拼音至少两个字符',
    regist_givenSur: '姓氏拼音和名字拼音姓应该为4~55个字符',
    regist_LnameLong: '输入的中文姓过长请重新输入',
    regist_FnameLong: '输入的中文名过长请重新输入',
    regist_unNormalChar: '请输入中文名\uFF0C生僻字可用拼音代替',
    regist_sex: '称呼',
    regist_girl: '女士',
    regist_boy: '先生',
    regist_id: '身份证号',
    regist_id_temp: '护照',
    regist_id_other: '其他',
    regist_idT: '请输入身份证号',
    regist_idP: '请输入护照号',
    regist_idO: '请输入其他证件号',
    regist_idW: '身份证号码输入错误,请输入15或18位身份证号',
    regist_idP_Error: '输入的证件号需4-15个字符\uFF0C英文字母或数字组成',
    regist_idO_Error: '输入的证件号需4-20个字符\uFF0C英文字母或数字组成',
    regist_birth: '生日',
    regist_birthT: '请选择出生日期',
    regist_way: '手机号码',
    regist_wayT: '请输入手机号码',
    regist_wayW: '请输入11位手机号码',
    regist_verify: '获取验证码',
    regist_verifyH: '输入短信验证码',
    regist_verifyT: '请输入短信验证码',
    registSubmit: '注册',
    accept_prototype1: '温馨提示\uFF1A您填写的手机号码将作为明珠卡号的后11位\u3002',
    bind_weixin: '绑定微信帐号',
    wx_tip: '温馨提示\uFF1A为保证您的合法权益\uFF0C请使用南航官网\u3001APP和微信号\u3002关注南航微信公众号CS95539\uFF0C享受购票\u3001值机\u3001查航班动态与里程信息服务\u3002',
    other_login: '或通过第三方登录',
    other_tip_forWeibo: '微博登录',
    other_tip_forQQ: 'QQ登录',
    checkin_login_tips: '温馨提示\uFF1A',
    checkin_login_desc1: '为保证您个人资料的安全性\uFF0C此功能仅限会员本人办理\u3002',
    checkin_login_desc2: '若您还不是南航会员\uFF0C<a style=\'text-decoration:underline;\' href=\'/touch/com.csair.mbp.index/index.html#com.csair.mbp.login/registZh\'>请点击快速入会</a>\uFF0C或认准其它官方渠道办理\uFF1A',
    checkin_login_desc3: '1\u3001<a id=\'downLoadApp\' style=\'text-decoration:underline;\'>下载南方航空APP</a>\uFF0C点击办登机牌\u3002',
    checkin_login_desc4: '2\u3001关注南航官方微信号cs95539\uFF0C点击航班服务中的办登机牌\u3002',
    checkin_login_desc5: '3\u3001登录南航官网<a style=\'text-decoration:underline;\' href=\'http://www.csair.com\'>www.csair.com</a>\uFF0C点击服务大厅中的办理乘机手续\u3002',
    safekeyboard_password_tolarge: '密码长度不能超过20位\u3002'
});
define('com.csair.mbp.login/login-plugin', [
    'zepto',
    'backbone',
    'underscore',
    'cube/cube',
    'com.csair.mbp/mbpserver',
    'i18n!com.csair.mbp.login/nls/locale',
    'com.csair.mbp/config'
], function (e, t, n, r, i, s, o) {
    var u = 'successPage', a = 'backPage', f = 'isNeedMemberLogin', l, c, h = t.Model.extend({
        initialize: function () {
        },
        bindweixin: function (e, t, n, r) {
            var s = {
                token: n,
                uId: e,
                ffp: t,
                chanel: r,
                asyncType: false
            }, o = {};
            return i.postNew({
                url: '/CSMBP/data/login/wxBindForTouch.do',
                params: s,
                success: function (e) {
                    if (e.operStatus == 'success') {
                        o.status = true;
                    } else {
                        o.status = false;
                    }
                },
                error: function (e, t) {
                    o = false;
                }
            }), o.status;
        },
        forward: function (e) {
            var t = r.Session.loadObject('user'), n = t.page.login_token, i = new Date(), s = 30;
            i.setTime(i.getTime() + s * 24 * 3600 * 1000);
            document.cookie = 'cs1246643sso=' + n + ';expires=' + i.toGMTString() + ';path=/;domain=.csair.com;';
            window.location.href = e;
        },
        request: function (e, n, o) {
            r.Session.saveObject('WeixinAjaxDid', true);
            var u = this, a, f;
            if (o == 'byVip') {
                a = {
                    userId: e,
                    password: n
                }, f = '/CSMBP/data/account/login/login.do';
            } else {
                o == 'byNoneVip' && (a = {
                    vcode: n,
                    mobile: e
                }, f = '/CSMBP/data/account/login/login_nm.do');
            }
            var l = new Object();
            l.NameOrContact = e;
            l.loginWay = o;
            i.postNew({
                url: f,
                params: a,
                loadingMsg: s.login_loadingText,
                success: function (e) {
                    if (e && !e.MESSAGE) {
                        var n = new Object();
                        console.log('login success');
                        if (e.loginType == '0') {
                            var i = new Object();
                            i.LOYALTYID = e.ffpUser.loyaltyId;
                            i.name_en = e.ffpUser.nameEn;
                            i.LOYALTYNAME = e.ffpUser.loyaltyName;
                            i.TIRID = e.ffpUser.tierId;
                            i.login_token = e.ffpUser.loginToken;
                            i.b2cname = e.ffpUser.b2cName;
                            i.certificate = e.ffpUser.certificate;
                            i.passPortNO = e.ffpUser.passPortNo;
                            i.otherId = e.ffpUser.otherId;
                            i.name = e.ffpUser.name;
                            i.FFPCardno = e.ffpUser.ffpCardno;
                            i.name_zh = e.ffpUser.nameZh;
                            i.mobileNo = e.ffpUser.mobliePhone;
                            i.loginType = e.loginType;
                            n.page = i;
                        } else if (e.loginType == '2') {
                            var i = new Object();
                            i.mobileNo = e.nonFfpUser.mobileNo;
                            i.result = e.nonFfpUser.key;
                            i.FFPCardno = e.nonFfpUser.ffpCardno;
                            i.loginType = e.loginType;
                            n.page = i;
                        }
                        r.Session.saveObject('user', n);
                        var a = r.Session.loadObject('successPage'), f = false;
                        a && a.length != 2 && a.substring(0, a.indexOf('@')) == 'forward' && (f = true, a = a.substring(a.indexOf('@') + 1, a.length));
                        var c = r.Session.loadObject('openid'), h = r.Session.loadObject('isCheckBindWeiXin'), p = r.Session.loadObject('weixininfo');
                        r.Session.saveObject('loginInfo', l);
                        if (c && h && l.loginWay == 'byVip') {
                            var d = r.Session.loadObject('weixintoken'), v = r.Session.loadObject('weixinChanel'), m = u.bindweixin(c, n.page.FFPCardno, d, v), g = m ? '成功' : '失败或者已经绑定过帐号';
                            m ? (console.log('bind weixin success'), r.Session.deleteObject('openid')) : console.log('bind weixin fail');
                            new r.Dialog({
                                autoshow: true,
                                target: 'body',
                                title: '绑定帐号到微信',
                                content: g
                            }, {
                                configs: [{
                                    title: '确定',
                                    eventName: 'ok'
                                }],
                                ok: function () {
                                    null != a.length && a.length == 2 ? o == 'byVip' ? t.history.navigate('b', { trigger: true }) : o == 'byNoneVip' && t.history.navigate('a', { trigger: true }) : f ? u.forward(a) : t.history.navigate(a, { trigger: true });
                                    r.Session.saveObject('isCheckBindWeiXin', false);
                                }
                            });
                        } else
                            c ? (p, a && a.length == 2 ? o == 'byVip' ? t.history.navigate('b', { trigger: true }) : o == 'byNoneVip' && t.history.navigate('a', { trigger: true }) : f ? u.forward(a) : t.history.navigate(a, { trigger: true }), r.Session.saveObject('isCheckBindWeiXin', false)) : a && a.length == 2 ? o == 'byVip' ? t.history.navigate('b', { trigger: true }) : o == 'byNoneVip' && t.history.navigate('a', { trigger: true }) : a ? f ? u.forward(a) : t.history.navigate(a, { trigger: true }) : t.history.navigate('com.csair.mbp.index/', { trigger: true });
                    } else
                        e && e.MESSAGE ? new r.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: s.tips,
                            content: e.MESSAGE
                        }, {
                            configs: [{
                                title: s.yes,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        }) : (console.log('login fail'), new r.Dialog({
                            autoshow: true,
                            target: 'body',
                            title: s.tips,
                            content: s.login_failedForPsd
                        }, {
                            configs: [{
                                title: s.yes,
                                eventName: 'ok'
                            }],
                            ok: function () {
                            }
                        }));
                },
                error: function (e, t) {
                    console.log('login fail');
                    console.log(t + '/' + e);
                    new r.Dialog({
                        autoshow: true,
                        target: 'body',
                        title: s.tips,
                        content: s.login_failedForConnection
                    }, {
                        configs: [{
                            title: s.yes,
                            eventName: 'ok'
                        }],
                        ok: function () {
                        }
                    });
                }
            }, true);
        }
    }, {
        config: {
            isNeedLogin: false,
            isNeedMemberLogin: false,
            isShowNavRightBtn: false,
            isShowLogout: false,
            onSuccess: null,
            onError: null,
            successPage: '/com.csair.mbp.index/',
            backPage: null
        },
        check: function (n, i) {
            var s = e.extend(this.config, n), o = r.Session.loadObject('user'), l = r.Session.loadObject('loginInfo');
            if (!o && !!s.isNeedLogin || l.loginWay == 'byNoneVip' && s.isNeedMemberLogin == 1) {
                s.successPage && r.Session.saveObject(u, n.successPage), s.backPage && r.Session.saveObject(a, n.backPage), r.Session.saveObject(f, n.isNeedMemberLogin), t.history.navigate('/com.csair.mbp.login/', { trigger: true });
            } else {
                i && i();
            }
        },
        request: function (e, t, n, r, i) {
            new h().request(e, t, n);
        },
        getLoginUser: function () {
            return r.Session.loadObject('user');
        },
        logout: function () {
            new r.Dialog({
                autoshow: true,
                target: 'body',
                title: s.tips,
                content: s.logout_tips
            }, {
                configs: [
                    {
                        title: s.logout_yes,
                        eventName: 'ok'
                    },
                    {
                        title: s.logout_cancle,
                        eventName: 'cancel'
                    }
                ],
                ok: function () {
                    r.Session.deleteObject('user');
                    r.Session.deleteObject('memberId');
                    r.Session.deleteObject('myWallSum');
                    console.log('logout......');
                    window.location.href = '/';
                },
                cancel: function () {
                }
            });
        },
        isLogin: function () {
            var e = r.Session.loadObject('user');
            return e ? true : false;
        },
        showRightBtn: function (n) {
            var i = e.extend(this.config, n), o = r.Session.loadObject('user');
            if (o || !i.isNeedLogin) {
                if (o && i.isShowNavRightBtn && i.isShowLogout) {
                    var u = e('<a/>').html(s.logout).addClass('button').addClass('btn-warning');
                    e(n.pageEl).find('header').append(u);
                    e(u).bind('click', function () {
                        h.logout();
                    });
                }
                if (i.isShowNavRightBtn && !i.isShowLogout) {
                    var u = e('<a/>').html('').addClass('button').attr('id', 'main');
                    e(n.pageEl).find('header').append(u);
                    e(u).bind('click', function () {
                        t.history.navigate('/com.csair.mbp.index/', { trigger: true });
                    });
                }
            }
        },
        getUserName: function (t) {
            var n = o.mbp_server + '/mbpwas/getUserName.shtml';
            e.ajax({
                type: 'GET',
                url: n,
                dataType: 'json',
                success: function (e) {
                    t.html(e.name);
                },
                error: function (e, t) {
                }
            });
        }
    });
    return h;
});
define('text!com.csair.mbp.login/login.html', [], function () {
    return '<link rel="stylesheet" href="../com.csair.mbp/safekeyboard.css"></link>\r\n<style type="text/css" media="all">\r\n\r\nhtml,body{\r\n    height:100%;\r\n}\r\n\r\n.label{\r\n\tmargin-top:30px;\r\n}\r\n#checkbox-bar{\r\n\tmargin: 25px 0 10px;\r\n}\r\ninput,input[type=password],input[type=tel]{\r\n\theight:37px;\r\n\tpadding:0.2em 0.5em 0.2em;\r\n}\r\n\r\n.login_other {\r\n  position: relative;\r\n  margin: 20px 15px 0;\r\n  padding-top: 10px;\r\n  border-top: 1px solid #ccc;\r\n}\r\n.login_other .or {\r\n  position: absolute;\r\n  top: -10px;\r\n  /*left: 50%;*/\r\n  left: 20%;\r\n  /*width: 26px;*/\r\n  width: 60%;\r\n  /*margin-left: -13px;*/\r\n  text-align: center;\r\n  background-color: rgb(246,246,246);\r\n}\r\n#regist{\r\n\tmargin-top: 10px;\r\n}\r\n.cube-form-field .cube-form-label{\r\n\tpadding-top: 0;\r\n\tpadding-bottom: 0;\r\n}\r\n.cube-form-label{\r\n\tline-height: 50px;\r\n}\r\n.cube-form-textfield{\r\n\tvertical-align: middle;\r\n}\r\n.loginBtnDiv{\r\n\tmargin-top: 10px;\r\n}\r\n#loginBtn{\r\n\twidth:100%;\r\n\tline-height:30px;\r\n\tfont-size: 18px;\r\n\tborder-radius: 0.3em;\r\n\tborder-width: 0;\r\n}\r\n.checkInTipsSty{\r\n\tfont-size:13px;\r\n}\r\n.infoHide{\r\n\tdisplay:none;\r\n}\r\n#loginByNoneVip{\r\n\tmargin-bottom: 20px;\r\n}\r\n.segmented-controller{\r\n\tbackground-color: #fff;\r\n\tborder-radius: 5px;\r\n}\r\n.segmented-controller > li{\r\n\tbackground-color: #fff;\r\n}\r\n.segmented-controller > li a{\r\n\tcolor: #1eb0e9;\r\n\tfont-size: 18px;\r\n\tfont-weight: bold;\r\n\tpadding: 8px 16px 7px;\r\n\tline-height: 22px;\r\n}\r\n.segmented-controller li.active {\r\n\tbackground-color: #1eb0e9;\r\n}\r\n.segmented-controller > li.active a{\r\n\tcolor: #fff;\r\n}\r\n.getCode{\r\n\tmargin-top: 13px;\r\n\tcolor: #1EB0E9;\r\n}\r\n.alreadyGet{\r\n\tcolor:#9C9C9C;\r\n}\r\n\r\n</style>\r\n</head>\r\n<body>\r\n\r\n<header class="bar-title">\r\n  <a id="back" class="button" href="javascript:void(0)"></a>\r\n  <h1 class="title"><span name="tailNo"></span><%=lang.welcome_login%></h1>\r\n  <!-- <a id="loginBtn" class="button btn-warning ui-corner-all" href="javascript:void(0)" cube-action="push"  src="images/edit.png" ><%=lang.login%></a> -->\r\n</header>\r\n\r\n<div  class="content">\r\n\t<div id="login" >\r\n\t\t<div>\r\n\t\t\t<ul id="loginWays" class="segmented-controller">\r\n\t\t\t\t<li class="active" data-value="queryByVip" style="width:50%" id="queryByVip_li">\r\n\t\t\t\t\t<a href="#" id="vipUsers"><%=lang.vipUser%><span style="margin-left:10dip"></span></a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li data-value="queryByNoneVip" style="width:50%" id="queryByNone_li">\r\n\t\t\t\t\t<a href="#" id="noneVipUsers"><%=lang.noneVipUser%></a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<div id="loginByVip">\r\n\t\t\t\t<div class="cube-form-fieldset" >\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<div class="cube-form-field">\r\n\t\t\t\t\t\t\t<div class="cube-form-label"><%=lang.account_number%></div>\r\n\t\t\t\t\t\t\t<div class="cube-form-textfield"><input id="username" name="username" value="" placeholder="<%=lang.account_placeholder%>" /></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="cube-form-field">\r\n\t\t\t\t\t\t\t<div class="cube-form-label"><%=lang.password%></div>\r\n\t\t\t\t\t\t\t<div class="cube-form-textfield"><input id="password" type="password" readonly="readonly" value="" placeholder="<%=lang.password_placeholder%>" /></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="loginBtnDiv">\r\n\t\t\t\t\t \t<a id="loginBtn" class="btn-warning ui-corner-all" href="javascript:void(0)" cube-action="push"  src="images/edit.png" ><%=lang.login%></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t<div id="checkbox-bar" class="hbox" style="width:100%">\r\n\t\t\t\t<div class="flex1 hbox" style="line-height:30px">\r\n\t\t\t\t\t<input id="remember_psd" type="checkbox" style="width:20px;height:20px"/>\r\n\t\t\t\t\t<div style="margin-left:8px;font-size:12px"><%=lang.remember_account%></div>\r\n\t\t\t\t</div>\r\n                <div class="flex1 hbox" style="line-height:30px;display: none;">\r\n                    <input id="bind_weixin" type="checkbox" style="width:20px;height:20px" checked="checked"/>\r\n                    <div style="margin-left:8px;font-size:12px"><%=lang.bind_weixin%></div>\r\n                </div>\r\n\t\t\t\t<div class="flex1 hbox" style="line-height:30px" id="forgetpsd">\r\n\t\t\t\t\t<img style="height:20px;width:20px;margin-right:8px;margin-top:2px" src="../com.csair.mbp.login/btn_password_refind.png"/>\r\n\t\t\t\t\t<div  href="#forgetpsd" style="font-size:12px"><%=lang.forgetpsd%></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n            <div id="loginByNoneVip" style="display:none;">\r\n            \t<div style="border: 1px solid #ccc;border-radius: 0.4em;background: #fff;">\r\n\t               <div class="hbox" style="border-bottom: 1px solid #ccc;padding: 5px;">\r\n\t                  <div style="margin-top: 13px;margin-right:5px;"><%=lang.phoneOrmail%></div>\r\n\t                  <div class="flex1">\r\n\t                 \t <input style="width: 95%;border:none;" id="contactNum" name="contactNum" value="" placeholder="<%=lang.input%>" />\r\n\t                  </div>\r\n\t                  <div class="getCode"><%=lang.getCode%></div>\r\n\t               </div>\r\n\t               <div class="hbox" style="padding: 5px;">\r\n\t               \t  <div style="margin-top: 13px;margin-right:5px;"><%=lang.code%></div>\r\n\t                  <div class="flex1">\r\n\t                 \t <input style="width: 95%;border:none;"  id="codeNum" name="codeNum" value="" placeholder="<%=lang.inputCode%>" />\r\n\t                  </div>\r\n\t               </div>\r\n               </div>\r\n               <div class="loginBtnDiv">\r\n\t\t\t\t \t<a id="loginBtn" class="btn-warning ui-corner-all" href="javascript:void(0)" cube-action="push"  src="images/edit.png" ><%=lang.login%></a>\r\n\t\t\t\t</div>\r\n            </div>\r\n            \r\n            <div id = "checkInTips" class="checkInTipsSty infoHide">\r\n\t\t\t\t<ul id="checkInTips">\r\n\t\t\t\t\t<h3><%=lang.checkin_login_tips%></h3>\r\n\t\t\t\t\t<li><%=lang.checkin_login_desc1%></li>\r\n\t\t\t\t\t<li><%=lang.checkin_login_desc2%></li>\r\n\t\t\t\t\t<li><%=lang.checkin_login_desc3%></li>\r\n\t\t\t\t\t<li><%=lang.checkin_login_desc4%></li>\r\n\t\t\t\t\t<li><%=lang.checkin_login_desc5%></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div style="color:red;text-align: center;" id="memberActionTip"></div>\t\r\n\t\t\t\t\r\n\t\t\t<!-- <div id = "memberLabel" class="label"><%=lang.regist_member%></div> -->\r\n\t\t\t<button id="regist" class="RadiusButton ui-corner-all" >\r\n\t\t\t\t<div><%=lang.regist_mingzhuka%></div>\r\n\t\t\t\t<span class="chevron"></span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<br/>\r\n\t\t<br/>\r\n\t\t\r\n\r\n\r\n\r\n\r\n\t<div class="login_other">\r\n\t\t<div class="or"><%=lang.other_login%></div>\r\n\t\t<table id="otherLogin" width="100%" style="display:">\r\n\r\n\t\t\t<tr>\r\n\t\t\t\t<td height="50px;" valign="middle" id="qqImage" align="center">\r\n\t\t\t\t\t<img height="40px" width="40px"  style="cursor:pointer;vertical-align:-13px;" src="../com.csair.mbp.login/images/qq.png"/><span><%=lang.other_tip_forQQ%></span>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td height="50px;" valign="middle" id="weiboImage" align="center">\r\n\t\t\t\t\t<img height="40px" width="40px"  style="cursor:pointer;vertical-align:-13px;" src="../com.csair.mbp.login/images/weibo.png"/><span><%=lang.other_tip_forWeibo%></span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t\t\t<wb:share-button type="button" size="middle"> </wb:share-button>\r\n\t</div>\r\n\t\r\n\t</div>\r\n\t<!-- <div style="margin-top:20px;">\r\n\t\t閸忚櫕鏁為崡妤勫焻瀵邦喕淇\uFFFD閸掑棔闊\u2543划鎯у兊娣団剝浼\uFFFD\r\n\t\t<br>\r\n\t\t<img src="../com.csair.mbp.index/images/QRcode.jpg" style="width:200px;height:200px;margin-left:20px;-webkit-touch-callout:default">\t\r\n\t</div> -->\r\n\r\n\t<!--濞ｈ\uE1E7濮為惃鍒\uE5BBv-->\r\n<!-- <div style="text-align:center;margin-top: 30px;"><img src="../com.csair.mbp.index/images/QRcode.jpg" style="width:40%;"></div>\r\n<div style="text-align:left;"><%=lang.wx_tip%></div> -->\r\n</div>\r\n<div id="safekeyboard"></div>\r\n';
});
e.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;
e.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
e.prototype.deviceIsIOS4 = e.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
e.prototype.deviceIsIOSWithBadTarget = e.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
e.prototype.needsClick = function (e) {
    switch (e.nodeName.toLowerCase()) {
        case 'button':
        case 'input':
            if (this.deviceIsIOS && e.type === 'file')
                return true;
            return e.disabled;
        case 'label':
        case 'video':
            return true;
        default:
            return /\bneedsclick\b/.test(e.className);
    }
};
e.prototype.needsFocus = function (e) {
    switch (e.nodeName.toLowerCase()) {
        case 'textarea':
        case 'select':
            return true;
        case 'input':
            switch (e.type) {
                case 'button':
                case 'checkbox':
                case 'file':
                case 'image':
                case 'radio':
                case 'submit':
                    return false;
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className);
    }
};
e.prototype.sendClick = function (e, t) {
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur();
    r = t.changedTouches[0];
    n = document.createEvent('MouseEvents');
    n.initMouseEvent('click', true, true, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, false, false, false, false, 0, null);
    n.forwardedTouchEvent = true;
    e.dispatchEvent(n);
};
e.prototype.focus = function (e) {
    var t;
    if (this.deviceIsIOS && e.setSelectionRange) {
        t = e.value.length, e.setSelectionRange(t, t);
    } else {
        e.focus();
    }
};
e.prototype.updateScrollParent = function (e) {
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n;
                e.fastClickScrollParent = n;
                break;
            }
            n = n.parentElement;
        } while (n);
    }
    t && (t.fastClickLastScrollTop = t.scrollTop);
};
e.prototype.getTargetElementFromEventTarget = function (e) {
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
};
e.prototype.onTouchStart = function (e) {
    var t, n, r;
    t = this.getTargetElementFromEventTarget(e.target);
    n = e.targetTouches[0];
    if (this.deviceIsIOS) {
        r = window.getSelection();
        if (r.rangeCount && !r.isCollapsed)
            return true;
        if (!this.deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier)
                return e.preventDefault(), false;
            this.lastTouchIdentifier = n.identifier;
            this.updateScrollParent(t);
        }
    }
    return this.trackingClick = true, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), true;
};
e.prototype.touchHasMoved = function (e) {
    var t = e.changedTouches[0];
    return Math.abs(t.pageX - this.touchStartX) > 10 || Math.abs(t.pageY - this.touchStartY) > 10 ? true : false;
};
e.prototype.findControl = function (e) {
    return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};
e.prototype.onTouchEnd = function (e) {
    var t, n, r, i, s, o = this.targetElement;
    this.touchHasMoved(e) && (this.trackingClick = false, this.targetElement = null);
    if (!this.trackingClick)
        return true;
    if (e.timeStamp - this.lastClickTime < 200)
        return this.cancelNextClick = true, true;
    this.lastClickTime = e.timeStamp;
    n = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;
    this.deviceIsIOSWithBadTarget && (s = e.changedTouches[0], o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset));
    r = o.tagName.toLowerCase();
    if (r === 'label') {
        t = this.findControl(o);
        if (t) {
            this.focus(o);
            if (this.deviceIsAndroid)
                return false;
            o = t;
        }
    } else if (this.needsFocus(o)) {
        if (e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && r === 'input')
            return this.targetElement = null, false;
        this.focus(o);
        if (!this.deviceIsIOS4 || r !== 'select')
            this.targetElement = null, e.preventDefault();
        return false;
    }
    if (this.deviceIsIOS && !this.deviceIsIOS4) {
        i = o.fastClickScrollParent;
        if (i && i.fastClickLastScrollTop !== i.scrollTop)
            return true;
    }
    return this.needsClick(o) || (e.preventDefault(), this.sendClick(o, e)), false;
};
e.prototype.onTouchCancel = function () {
    this.trackingClick = false;
    this.targetElement = null;
};
e.prototype.onMouse = function (e) {
    return this.targetElement ? e.forwardedTouchEvent ? true : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = true, e.stopPropagation(), e.preventDefault(), false) : true : true : true;
};
e.prototype.onClick = function (e) {
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = false, true) : e.target.type === 'submit' && e.detail === 0 ? true : (t = this.onMouse(e), t || (this.targetElement = null), t);
};
e.prototype.destroy = function () {
    var e = this.layer;
    this.deviceIsAndroid && (e.removeEventListener('mouseover', this.onMouse, true), e.removeEventListener('mousedown', this.onMouse, true), e.removeEventListener('mouseup', this.onMouse, true));
    e.removeEventListener('click', this.onClick, true);
    e.removeEventListener('touchstart', this.onTouchStart, false);
    e.removeEventListener('touchend', this.onTouchEnd, false);
    e.removeEventListener('touchcancel', this.onTouchCancel, false);
};
e.notNeeded = function () {
    var t;
    if (typeof window.ontouchstart == 'undefined')
        return true;
    if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
        if (!e.prototype.deviceIsAndroid)
            return true;
        t = document.querySelector('meta[name=viewport]');
        if (t && t.content.indexOf('user-scalable=no') !== -1)
            return true;
    }
    return false;
};
e.attach = function (t) {
    return new e(t);
};
typeof define != 'undefined' && define.amd && define('fastclick', [], function () {
    return e;
});
typeof module != 'undefined' && module.exports && (module.exports = e.attach, module.exports.FastClick = e);
(function () {
    var e = function () {
        function e(e, t, n) {
            null != e && ('number' == typeof e ? this.fromNumber(e, t, n) : null == t && 'string' != typeof e ? this.fromString(e, 256) : this.fromString(e, t));
        }
        function t() {
            return new e(null);
        }
        function n(e, t, n, r, i, s) {
            for (; --s >= 0;) {
                var o = t * this[e++] + n[r] + i;
                i = Math.floor(o / 67108864);
                n[r++] = 67108863 & o;
            }
            return i;
        }
        function r(e, t, n, r, i, s) {
            for (var o = 32767 & t, u = t >> 15; --s >= 0;) {
                var a = 32767 & this[e], f = this[e++] >> 15, l = u * a + f * o;
                a = o * a + ((32767 & l) << 15) + n[r] + (1073741823 & i);
                i = (a >>> 30) + (l >>> 15) + u * f + (i >>> 30);
                n[r++] = 1073741823 & a;
            }
            return i;
        }
        function i(e, t, n, r, i, s) {
            for (var o = 16383 & t, u = t >> 14; --s >= 0;) {
                var a = 16383 & this[e], f = this[e++] >> 14, l = u * a + f * o;
                a = o * a + ((16383 & l) << 14) + n[r] + i;
                i = (a >> 28) + (l >> 14) + u * f;
                n[r++] = 268435455 & a;
            }
            return i;
        }
        function s(e) {
            return Ln.charAt(e);
        }
        function o(e, t) {
            var n = An[e.charCodeAt(t)];
            return null == n ? -1 : n;
        }
        function u(e) {
            for (var t = this.t - 1; t >= 0; --t)
                e[t] = this[t];
            e.t = this.t;
            e.s = this.s;
        }
        function a(e) {
            this.t = 1;
            this.s = 0 > e ? -1 : 0;
            e > 0 ? this[0] = e : -1 > e ? this[0] = e + DV : this.t = 0;
        }
        function f(e) {
            var n = t();
            return n.fromInt(e), n;
        }
        function l(t, n) {
            var r;
            if (16 == n)
                r = 4;
            else if (8 == n)
                r = 3;
            else if (256 == n)
                r = 8;
            else if (2 == n)
                r = 1;
            else if (32 == n)
                r = 5;
            else {
                if (4 != n)
                    return void this.fromRadix(t, n);
                r = 2;
            }
            this.t = 0;
            this.s = 0;
            8 == r && 0 != (128 & t[0]) && (this.s = -1, u > 0 && (this[this.t - 1] |= (1 << this.DB - u) - 1 << u));
            this.clamp();
            s && e.ZERO.subTo(this, this);
            8 == r && 0 != (128 & t[0]) && (this.s = -1, u > 0 && (this[this.t - 1] |= (1 << this.DB - u) - 1 << u)), this.clamp(), s && e.ZERO.subTo(this, this);
        }
        function c() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e;)
                --this.t;
        }
        function h(e) {
            if (this.s < 0)
                return '-' + this.negate().toString(e);
            var t;
            if (16 == e)
                t = 4;
            else if (8 == e)
                t = 3;
            else if (2 == e)
                t = 1;
            else if (32 == e)
                t = 5;
            else {
                if (4 != e)
                    return this.toRadix(e);
                t = 2;
            }
            var n, r = (1 << t) - 1, i = false, o = '', u = this.t, a = this.DB - u * this.DB % t;
            if (u-- > 0)
                for (a < this.DB && (n = this[u] >> a) > 0 && (i = true, o = s(n)); u >= 0;)
                    t > a ? (n = (this[u] & (1 << a) - 1) << t - a, n |= this[--u] >> (a += this.DB - t)) : (n = this[u] >> (a -= t) & r, 0 >= a && (a += this.DB, --u)), n > 0 && (i = true), i && (o += s(n));
            return i ? o : '0';
        }
        function p() {
            var n = t();
            return e.ZERO.subTo(this, n), n;
        }
        function d() {
            return this.s < 0 ? this.negate() : this;
        }
        function m(e) {
            var t = this.s - e.s;
            if (0 != t)
                return t;
            var n = this.t;
            if (t = n - e.t, 0 != t)
                return this.s < 0 ? -t : t;
            for (; --n >= 0;)
                if (0 != (t = this[n] - e[n]))
                    return t;
            return 0;
        }
        function g(e) {
            var t, n = 1;
            return 0 != (t = e >>> 16) && (e = t, n += 16), 0 != (t = e >> 8) && (e = t, n += 8), 0 != (t = e >> 4) && (e = t, n += 4), 0 != (t = e >> 2) && (e = t, n += 2), 0 != (t = e >> 1) && (e = t, n += 1), n;
        }
        function y() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + g(this[this.t - 1] ^ this.s & this.DM);
        }
        function b(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n)
                t[n + e] = this[n];
            for (n = e - 1; n >= 0; --n)
                t[n] = 0;
            t.t = this.t + e;
            t.s = this.s;
        }
        function w(e, t) {
            for (var n = e; n < this.t; ++n)
                t[n - e] = this[n];
            t.t = Math.max(this.t - e, 0);
            t.s = this.s;
        }
        function E(e, t) {
            var n, r = e % this.DB, i = this.DB - r, s = (1 << i) - 1, o = Math.floor(e / this.DB), u = this.s << r & this.DM;
            for (n = this.t - 1; n >= 0; --n)
                t[n + o + 1] = this[n] >> i | u, u = (this[n] & s) << r;
            for (n = o - 1; n >= 0; --n)
                t[n] = 0;
            t[o] = u;
            t.t = this.t + o + 1;
            t.s = this.s;
            t.clamp();
        }
        function S(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t)
                return void (t.t = 0);
            var r = e % this.DB, i = this.DB - r, s = (1 << r) - 1;
            t[0] = this[n] >> r;
            for (var o = n + 1; o < this.t; ++o)
                t[o - n - 1] |= (this[o] & s) << i, t[o - n] = this[o] >> r;
            r > 0 && (t[this.t - n - 1] |= (this.s & s) << i);
            t.t = this.t - n;
            t.clamp();
        }
        function x(e, t) {
            for (var n = 0, r = 0, i = Math.min(e.t, this.t); i > n;)
                r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r -= e.s; n < this.t;)
                    r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; n < e.t;)
                    r -= e[n], t[n++] = r & this.DM, r >>= this.DB;
                r -= e.s;
            }
            t.s = 0 > r ? -1 : 0;
            -1 > r ? t[n++] = this.DV + r : r > 0 && (t[n++] = r);
            t.t = n;
            t.clamp();
        }
        function T(t, n) {
            var r = this.abs(), i = t.abs(), s = r.t;
            for (n.t = s + i.t; --s >= 0;)
                n[s] = 0;
            for (s = 0; s < i.t; ++s)
                n[s + r.t] = r.am(0, i[s], n, s, 0, r.t);
            n.s = 0;
            n.clamp();
            this.s != t.s && e.ZERO.subTo(n, n);
        }
        function N(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0;)
                e[n] = 0;
            for (n = 0; n < t.t - 1; ++n) {
                var r = t.am(n, t[n], e, 2 * n, 0, 1);
                (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1);
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1));
            e.s = 0;
            e.clamp();
        }
        function C(n, r, i) {
            var s = n.abs();
            if (!(s.t <= 0)) {
                var o = this.abs();
                if (o.t < s.t)
                    return null != r && r.fromInt(0), void (null != i && this.copyTo(i));
                null == i && (i = t());
                var u = t(), a = this.s, f = n.s, l = this.DB - g(s[s.t - 1]);
                if (l > 0) {
                    s.lShiftTo(l, u), o.lShiftTo(l, i);
                } else {
                    s.copyTo(u), o.copyTo(i);
                }
                var c = u.t, h = u[c - 1];
                if (0 != h) {
                    var p = h * (1 << this.F1) + (c > 1 ? u[c - 2] >> this.F2 : 0), d = this.FV / p, v = (1 << this.F1) / p, m = 1 << this.F2, y = i.t, b = y - c, w = null == r ? t() : r;
                    for (u.dlShiftTo(b, w), i.compareTo(w) >= 0 && (i[i.t++] = 1, i.subTo(w, i)), e.ONE.dlShiftTo(c, w), w.subTo(u, u); u.t < c;)
                        u[u.t++] = 0;
                    for (; --b >= 0;) {
                        var E = i[--y] == h ? this.DM : Math.floor(i[y] * d + (i[y - 1] + m) * v);
                        if ((i[y] += u.am(0, E, i, b, 0, c)) < E)
                            for (u.dlShiftTo(b, w), i.subTo(w, i); i[y] < --E;)
                                i.subTo(w, i);
                    }
                    null != r && (i.drShiftTo(c, r), a != f && e.ZERO.subTo(r, r));
                    i.t = c;
                    i.clamp();
                    l > 0 && i.rShiftTo(l, i);
                    0 > a && e.ZERO.subTo(i, i);
                }
            }
        }
        function k(n) {
            var r = t();
            return this.abs().divRemTo(n, null, r), this.s < 0 && r.compareTo(e.ZERO) > 0 && n.subTo(r, r), r;
        }
        function L(e) {
            this.m = e;
        }
        function A(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e;
        }
        function O(e) {
            return e;
        }
        function M(e) {
            e.divRemTo(this.m, null, e);
        }
        function _(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n);
        }
        function D(e, t) {
            e.squareTo(t);
            this.reduce(t);
        }
        function P() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if (0 == (1 & e))
                return 0;
            var t = 3 & e;
            return t = t * (2 - (15 & e) * t) & 15, t = t * (2 - (255 & e) * t) & 255, t = t * (2 - ((65535 & e) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t;
        }
        function H(e) {
            this.m = e;
            this.mp = e.invDigit();
            this.mpl = 32767 & this.mp;
            this.mph = this.mp >> 15;
            this.um = (1 << e.DB - 15) - 1;
            this.mt2 = 2 * e.t;
        }
        function B(n) {
            var r = t();
            return n.abs().dlShiftTo(this.m.t, r), r.divRemTo(this.m, null, r), n.s < 0 && r.compareTo(e.ZERO) > 0 && this.m.subTo(r, r), r;
        }
        function j(e) {
            var n = t();
            return e.copyTo(n), this.reduce(n), n;
        }
        function F(e) {
            for (; e.t <= this.mt2;)
                e[e.t++] = 0;
            for (var t = 0; t < this.m.t; ++t) {
                var n = 32767 & e[t], r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
                for (n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t); e[n] >= e.DV;)
                    e[n] -= e.DV, e[++n]++;
            }
            e.clamp();
            e.drShiftTo(this.m.t, e);
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e);
        }
        function I(e, t) {
            e.squareTo(t);
            this.reduce(t);
        }
        function q(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n);
        }
        function R() {
            return 0 == (this.t > 0 ? 1 & this[0] : this.s);
        }
        function U(n, r) {
            if (n > 4294967295 || 1 > n)
                return e.ONE;
            var i = t(), s = t(), o = r.convert(this), u = g(n) - 1;
            for (o.copyTo(i); --u >= 0;)
                if (r.sqrTo(i, s), (n & 1 << u) > 0)
                    r.mulTo(s, o, i);
                else {
                    var a = i;
                    i = s;
                    s = a;
                }
            return r.revert(i);
        }
        function z(e, t) {
            var n;
            return n = 256 > e || t.isEven() ? new L(t) : new H(t), this.exp(e, n);
        }
        function W() {
            var e = t();
            return this.copyTo(e), e;
        }
        function X() {
            if (this.s < 0) {
                if (1 == this.t)
                    return this[0] - this.DV;
                if (0 == this.t)
                    return -1;
            } else {
                if (1 == this.t)
                    return this[0];
                if (0 == this.t)
                    return 0;
            }
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
        }
        function V() {
            return 0 == this.t ? this.s : this[0] << 24 >> 24;
        }
        function $() {
            return 0 == this.t ? this.s : this[0] << 16 >> 16;
        }
        function J(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e));
        }
        function K() {
            return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1;
        }
        function Q(e) {
            if (null == e && (e = 10), 0 == this.signum() || 2 > e || e > 36)
                return '0';
            var n = this.chunkSize(e), r = Math.pow(e, n), i = f(r), s = t(), o = t(), u = '';
            for (this.divRemTo(i, s, o); s.signum() > 0;)
                u = (r + o.intValue()).toString(e).substr(1) + u, s.divRemTo(i, s, o);
            return o.intValue().toString(e) + u;
        }
        function G(t, n) {
            this.fromInt(0);
            null == n && (n = 10);
            u > 0 && (this.dMultiply(Math.pow(n, u)), this.dAddOffset(a, 0));
            s && e.ZERO.subTo(this, this);
            u > 0 && (this.dMultiply(Math.pow(n, u)), this.dAddOffset(a, 0)), s && e.ZERO.subTo(this, this);
        }
        function Y(t, n, r) {
            if ('number' == typeof n)
                if (2 > t)
                    this.fromInt(1);
                else
                    for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ot, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(n);)
                        this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(e.ONE.shiftLeft(t - 1), this);
            else {
                var i = new Array(), s = 7 & t;
                i.length = (t >> 3) + 1;
                n.nextBytes(i);
                s > 0 ? i[0] &= (1 << s) - 1 : i[0] = 0;
                this.fromString(i, 256);
            }
        }
        function Z() {
            var e = this.t, t = new Array();
            t[0] = this.s;
            var n, r = this.DB - e * this.DB % 8, i = 0;
            if (e-- > 0)
                for (r < this.DB && (n = this[e] >> r) != (this.s & this.DM) >> r && (t[i++] = n | this.s << this.DB - r); e >= 0;)
                    8 > r ? (n = (this[e] & (1 << r) - 1) << 8 - r, n |= this[--e] >> (r += this.DB - 8)) : (n = this[e] >> (r -= 8) & 255, 0 >= r && (r += this.DB, --e)), 0 != (128 & n) && (n |= -256), 0 == i && (128 & this.s) != (128 & n) && ++i, (i > 0 || n != this.s) && (t[i++] = n);
            return t;
        }
        function et(e) {
            return 0 == this.compareTo(e);
        }
        function tt(e) {
            return this.compareTo(e) < 0 ? this : e;
        }
        function nt(e) {
            return this.compareTo(e) > 0 ? this : e;
        }
        function rt(e, t, n) {
            var r, i, s = Math.min(e.t, this.t);
            for (r = 0; s > r; ++r)
                n[r] = t(this[r], e[r]);
            if (e.t < this.t) {
                for (i = e.s & this.DM, r = s; r < this.t; ++r)
                    n[r] = t(this[r], i);
                n.t = this.t;
            } else {
                for (i = this.s & this.DM, r = s; r < e.t; ++r)
                    n[r] = t(i, e[r]);
                n.t = e.t;
            }
            n.s = t(this.s, e.s);
            n.clamp();
        }
        function it(e, t) {
            return e & t;
        }
        function st(e) {
            var n = t();
            return this.bitwiseTo(e, it, n), n;
        }
        function ot(e, t) {
            return e | t;
        }
        function ut(e) {
            var n = t();
            return this.bitwiseTo(e, ot, n), n;
        }
        function at(e, t) {
            return e ^ t;
        }
        function ft(e) {
            var n = t();
            return this.bitwiseTo(e, at, n), n;
        }
        function lt(e, t) {
            return e & ~t;
        }
        function ct(e) {
            var n = t();
            return this.bitwiseTo(e, lt, n), n;
        }
        function ht() {
            for (var e = t(), n = 0; n < this.t; ++n)
                e[n] = this.DM & ~this[n];
            return e.t = this.t, e.s = ~this.s, e;
        }
        function pt(e) {
            var n = t();
            return 0 > e ? this.rShiftTo(-e, n) : this.lShiftTo(e, n), n;
        }
        function dt(e) {
            var n = t();
            return 0 > e ? this.lShiftTo(-e, n) : this.rShiftTo(e, n), n;
        }
        function vt(e) {
            if (0 == e)
                return -1;
            var t = 0;
            return 0 == (65535 & e) && (e >>= 16, t += 16), 0 == (255 & e) && (e >>= 8, t += 8), 0 == (15 & e) && (e >>= 4, t += 4), 0 == (3 & e) && (e >>= 2, t += 2), 0 == (1 & e) && ++t, t;
        }
        function mt() {
            for (var e = 0; e < this.t; ++e)
                if (0 != this[e])
                    return e * this.DB + vt(this[e]);
            return this.s < 0 ? this.t * this.DB : -1;
        }
        function gt(e) {
            for (var t = 0; 0 != e;)
                e &= e - 1, ++t;
            return t;
        }
        function yt() {
            for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n)
                e += gt(this[n] ^ t);
            return e;
        }
        function bt(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? 0 != this.s : 0 != (this[t] & 1 << e % this.DB);
        }
        function wt(t, n) {
            var r = e.ONE.shiftLeft(t);
            return this.bitwiseTo(r, n, r), r;
        }
        function Et(e) {
            return this.changeBit(e, ot);
        }
        function St(e) {
            return this.changeBit(e, lt);
        }
        function xt(e) {
            return this.changeBit(e, at);
        }
        function Tt(e, t) {
            for (var n = 0, r = 0, i = Math.min(e.t, this.t); i > n;)
                r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB;
            if (e.t < this.t) {
                for (r += e.s; n < this.t;)
                    r += this[n], t[n++] = r & this.DM, r >>= this.DB;
                r += this.s;
            } else {
                for (r += this.s; n < e.t;)
                    r += e[n], t[n++] = r & this.DM, r >>= this.DB;
                r += e.s;
            }
            t.s = 0 > r ? -1 : 0;
            r > 0 ? t[n++] = r : -1 > r && (t[n++] = this.DV + r);
            t.t = n;
            t.clamp();
        }
        function Nt(e) {
            var n = t();
            return this.addTo(e, n), n;
        }
        function Ct(e) {
            var n = t();
            return this.subTo(e, n), n;
        }
        function kt(e) {
            var n = t();
            return this.multiplyTo(e, n), n;
        }
        function Lt() {
            var e = t();
            return this.squareTo(e), e;
        }
        function At(e) {
            var n = t();
            return this.divRemTo(e, n, null), n;
        }
        function Ot(e) {
            var n = t();
            return this.divRemTo(e, null, n), n;
        }
        function Mt(e) {
            var n = t(), r = t();
            return this.divRemTo(e, n, r), new Array(n, r);
        }
        function _t(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t);
            ++this.t;
            this.clamp();
        }
        function Dt(e, t) {
            if (0 != e) {
                for (; this.t <= t;)
                    this[this.t++] = 0;
                for (this[t] += e; this[t] >= this.DV;)
                    this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t];
            }
        }
        function Pt() {
        }
        function Ht(e) {
            return e;
        }
        function Bt(e, t, n) {
            e.multiplyTo(t, n);
        }
        function jt(e, t) {
            e.squareTo(t);
        }
        function Ft(e) {
            return this.exp(e, new Pt());
        }
        function It(e, t, n) {
            var r = Math.min(this.t + e.t, t);
            for (n.s = 0, n.t = r; r > 0;)
                n[--r] = 0;
            var i;
            for (i = n.t - this.t; i > r; ++r)
                n[r + this.t] = this.am(0, e[r], n, r, 0, this.t);
            for (i = Math.min(e.t, t); i > r; ++r)
                this.am(0, e[r], n, r, 0, t - r);
            n.clamp();
        }
        function qt(e, t, n) {
            --t;
            var r = n.t = this.t + e.t - t;
            for (n.s = 0; --r >= 0;)
                n[r] = 0;
            for (r = Math.max(t - this.t, 0); r < e.t; ++r)
                n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t);
            n.clamp();
            n.drShiftTo(1, n);
        }
        function Rt(n) {
            this.r2 = t();
            this.q3 = t();
            e.ONE.dlShiftTo(2 * n.t, this.r2);
            this.mu = this.r2.divide(n);
            this.m = n;
        }
        function Ut(e) {
            if (e.s < 0 || e.t > 2 * this.m.t)
                return e.mod(this.m);
            if (e.compareTo(this.m) < 0)
                return e;
            var n = t();
            return e.copyTo(n), this.reduce(n), n;
        }
        function zt(e) {
            return e;
        }
        function Wt(e) {
            for (e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0;)
                e.dAddOffset(1, this.m.t + 1);
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0;)
                e.subTo(this.m, e);
        }
        function Xt(e, t) {
            e.squareTo(t);
            this.reduce(t);
        }
        function Vt(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n);
        }
        function $t(e, n) {
            var r, i, s = e.bitLength(), o = f(1);
            if (0 >= s)
                return o;
            r = 18 > s ? 1 : 48 > s ? 3 : 144 > s ? 4 : 768 > s ? 5 : 6;
            i = 8 > s ? new L(n) : n.isEven() ? new Rt(n) : new H(n);
            var u = new Array(), a = 3, l = r - 1, c = (1 << r) - 1;
            if (u[1] = i.convert(this), r > 1) {
                var h = t();
                for (i.sqrTo(u[1], h); c >= a;)
                    u[a] = t(), i.mulTo(h, u[a - 2], u[a]), a += 2;
            }
            var p, d, v = e.t - 1, m = true, y = t();
            for (s = g(e[v]) - 1; v >= 0;) {
                for (s >= l ? p = e[v] >> s - l & c : (p = (e[v] & (1 << s + 1) - 1) << l - s, v > 0 && (p |= e[v - 1] >> this.DB + s - l)), a = r; 0 == (1 & p);)
                    p >>= 1, --a;
                if ((s -= a) < 0 && (s += this.DB, --v), m)
                    u[p].copyTo(o), m = false;
                else {
                    for (; a > 1;)
                        i.sqrTo(o, y), i.sqrTo(y, o), a -= 2;
                    a > 0 ? i.sqrTo(o, y) : (d = o, o = y, y = d);
                    i.mulTo(y, u[p], o);
                }
                for (; v >= 0 && 0 == (e[v] & 1 << s);)
                    i.sqrTo(o, y), d = o, o = y, y = d, --s < 0 && (s = this.DB - 1, --v);
            }
            return i.revert(o);
        }
        function Jt(e) {
            var t = this.s < 0 ? this.negate() : this.clone(), n = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(n) < 0) {
                var r = t;
                t = n;
                n = r;
            }
            var i = t.getLowestSetBit(), s = n.getLowestSetBit();
            if (0 > s)
                return t;
            for (s > i && (s = i), s > 0 && (t.rShiftTo(s, t), n.rShiftTo(s, n)); t.signum() > 0;)
                (i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), t.compareTo(n) >= 0 ? (t.subTo(n, t), t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n));
            return s > 0 && n.lShiftTo(s, n), n;
        }
        function Kt(e) {
            if (0 >= e)
                return 0;
            var t = this.DV % e, n = this.s < 0 ? e - 1 : 0;
            if (this.t > 0)
                if (0 == t)
                    n = this[0] % e;
                else
                    for (var r = this.t - 1; r >= 0; --r)
                        n = (t * n + this[r]) % e;
            return n;
        }
        function Qt(t) {
            var n = t.isEven();
            if (this.isEven() && n || 0 == t.signum())
                return e.ZERO;
            for (var r = t.clone(), i = this.clone(), s = f(1), o = f(0), u = f(0), a = f(1); 0 != r.signum();) {
                for (; r.isEven();)
                    r.rShiftTo(1, r), n ? (s.isEven() && o.isEven() || (s.addTo(this, s), o.subTo(t, o)), s.rShiftTo(1, s)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
                for (; i.isEven();)
                    i.rShiftTo(1, i), n ? (u.isEven() && a.isEven() || (u.addTo(this, u), a.subTo(t, a)), u.rShiftTo(1, u)) : a.isEven() || a.subTo(t, a), a.rShiftTo(1, a);
                if (r.compareTo(i) >= 0) {
                    r.subTo(i, r), n && s.subTo(u, s), o.subTo(a, o);
                } else {
                    i.subTo(r, i), n && u.subTo(s, u), a.subTo(o, a);
                }
            }
            return 0 != i.compareTo(e.ONE) ? e.ZERO : a.compareTo(t) >= 0 ? a.subtract(t) : a.signum() < 0 ? (a.addTo(t, a), a.signum() < 0 ? a.add(t) : a) : a;
        }
        function Gt(e) {
            var t, n = this.abs();
            if (1 == n.t && n[0] <= _n[_n.length - 1]) {
                for (t = 0; t < _n.length; ++t)
                    if (n[0] == _n[t])
                        return true;
                return false;
            }
            if (n.isEven())
                return false;
            for (t = 1; t < _n.length;) {
                for (var r = _n[t], i = t + 1; i < _n.length && Dn > r;)
                    r *= _n[i++];
                for (r = n.modInt(r); i > t;)
                    if (r % _n[t++] == 0)
                        return false;
            }
            return n.millerRabin(e);
        }
        function Yt(n) {
            var r = this.subtract(e.ONE), i = r.getLowestSetBit();
            if (0 >= i)
                return false;
            var s = r.shiftRight(i);
            n = n + 1 >> 1;
            n > _n.length && (n = _n.length);
            for (var o = t(), u = 0; n > u; ++u) {
                o.fromInt(_n[Math.floor(Math.random() * _n.length)]);
                var a = o.modPow(s, this);
                if (0 != a.compareTo(e.ONE) && 0 != a.compareTo(r)) {
                    for (var f = 1; f++ < i && 0 != a.compareTo(r);)
                        if (a = a.modPowInt(2, this), 0 == a.compareTo(e.ONE))
                            return false;
                    if (0 != a.compareTo(r))
                        return false;
                }
            }
            return true;
        }
        function Zt() {
            this.i = 0;
            this.j = 0;
            this.S = new Array();
        }
        function en(e) {
            var t, n, r;
            for (t = 0; 256 > t; ++t)
                this.S[t] = t;
            for (n = 0, t = 0; 256 > t; ++t)
                n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], this.S[t] = this.S[n], this.S[n] = r;
            this.i = 0;
            this.j = 0;
        }
        function tn() {
            var e;
            return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255];
        }
        function nn() {
            return new Zt();
        }
        function rn() {
            if (null == Hn) {
                for (Hn = nn(); Pn > jn;) {
                    var e = Math.floor(65536 * Math.random());
                    Bn[jn++] = 255 & e;
                }
                for (Hn.init(Bn), jn = 0; jn < Bn.length; ++jn)
                    Bn[jn] = 0;
                jn = 0;
            }
            return Hn.next();
        }
        function sn(e) {
            var t;
            for (t = 0; t < e.length; ++t)
                e[t] = rn();
        }
        function on() {
        }
        function un(t, n) {
            return new e(t, n);
        }
        function an(e, t) {
            for (var n = '', r = 0; r + t < e.length;)
                n += e.substring(r, r + t) + '\n', r += t;
            return n + e.substring(r, e.length);
        }
        function fn(e) {
            return 16 > e ? '0' + e.toString(16) : e.toString(16);
        }
        function ln(t, n) {
            if (n < t.length + 11)
                return console.error('Message too long for RSA'), null;
            for (var r = new Array(), i = t.length - 1; i >= 0 && n > 0;) {
                var s = t.charCodeAt(i--);
                if (128 > s) {
                    r[--n] = s;
                } else {
                    s > 127 && 2048 > s ? (r[--n] = 63 & s | 128, r[--n] = s >> 6 | 192) : (r[--n] = 63 & s | 128, r[--n] = s >> 6 & 63 | 128, r[--n] = s >> 12 | 224);
                }
            }
            r[--n] = 0;
            for (var o = new on(), u = new Array(); n > 2;) {
                for (u[0] = 0; 0 == u[0];)
                    o.nextBytes(u);
                r[--n] = u[0];
            }
            return r[--n] = 2, r[--n] = 0, new e(r);
        }
        function cn() {
            this.n = null;
            this.e = 0;
            this.d = null;
            this.p = null;
            this.q = null;
            this.dmp1 = null;
            this.dmq1 = null;
            this.coeff = null;
        }
        function hn(e, t) {
            if (null != e && null != t && e.length > 0 && t.length > 0) {
                this.n = un(e, 16), this.e = parseInt(t, 16);
            } else {
                console.error('Invalid RSA public key');
            }
        }
        function pn(e) {
            return e.modPowInt(this.e, this.n);
        }
        function dn(e) {
            var t = ln(e, this.n.bitLength() + 7 >> 3);
            if (null == t)
                return null;
            var n = this.doPublic(t);
            if (null == n)
                return null;
            var r = n.toString(16);
            return 0 == (1 & r.length) ? r : '0' + r;
        }
        function vn(e, t) {
            for (var n = e.toByteArray(), r = 0; r < n.length && 0 == n[r];)
                ++r;
            if (n.length - r != t - 1 || 2 != n[r])
                return null;
            for (++r; 0 != n[r];)
                if (++r >= n.length)
                    return null;
            for (var i = ''; ++r < n.length;) {
                var s = 255 & n[r];
                if (128 > s) {
                    i += String.fromCharCode(s);
                } else {
                    s > 191 && 224 > s ? (i += String.fromCharCode((31 & s) << 6 | 63 & n[r + 1]), ++r) : (i += String.fromCharCode((15 & s) << 12 | (63 & n[r + 1]) << 6 | 63 & n[r + 2]), r += 2);
                }
            }
            return i;
        }
        function mn(e, t, n) {
            if (null != e && null != t && e.length > 0 && t.length > 0) {
                this.n = un(e, 16), this.e = parseInt(t, 16), this.d = un(n, 16);
            } else {
                console.error('Invalid RSA private key');
            }
        }
        function gn(e, t, n, r, i, s, o, u) {
            if (null != e && null != t && e.length > 0 && t.length > 0) {
                this.n = un(e, 16), this.e = parseInt(t, 16), this.d = un(n, 16), this.p = un(r, 16), this.q = un(i, 16), this.dmp1 = un(s, 16), this.dmq1 = un(o, 16), this.coeff = un(u, 16);
            } else {
                console.error('Invalid RSA private key');
            }
        }
        function yn(t, n) {
            var r = new on(), i = t >> 1;
            this.e = parseInt(n, 16);
            for (var s = new e(n, 16);;) {
                for (; this.p = new e(t - i, 1, r), 0 != this.p.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new e(i, 1, r), 0 != this.q.subtract(e.ONE).gcd(s).compareTo(e.ONE) || !this.q.isProbablePrime(10););
                if (this.p.compareTo(this.q) <= 0) {
                    var o = this.p;
                    this.p = this.q;
                    this.q = o;
                }
                var u = this.p.subtract(e.ONE), a = this.q.subtract(e.ONE), f = u.multiply(a);
                if (0 == f.gcd(s).compareTo(e.ONE)) {
                    this.n = this.p.multiply(this.q);
                    this.d = s.modInverse(f);
                    this.dmp1 = this.d.mod(u);
                    this.dmq1 = this.d.mod(a);
                    this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        }
        function bn(e) {
            if (null == this.p || null == this.q)
                return e.modPow(this.d, this.n);
            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), n = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(n) < 0;)
                t = t.add(this.p);
            return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n);
        }
        function wn(e) {
            var t = un(e, 16), n = this.doPrivate(t);
            return null == n ? null : vn(n, this.n.bitLength() + 7 >> 3);
        }
        function En(e) {
            var t, n, r = '';
            for (t = 0; t + 3 <= e.length; t += 3)
                n = parseInt(e.substring(t, t + 3), 16), r += Rn.charAt(n >> 6) + Rn.charAt(63 & n);
            for (t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), r += Rn.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), r += Rn.charAt(n >> 2) + Rn.charAt((3 & n) << 4)); (3 & r.length) > 0;)
                r += Un;
            return r;
        }
        function Sn(e) {
            var t, n, r = '', i = 0;
            for (t = 0; t < e.length && e.charAt(t) != Un; ++t)
                v = Rn.indexOf(e.charAt(t)), 0 > v || (0 == i ? (r += s(v >> 2), n = 3 & v, i = 1) : 1 == i ? (r += s(n << 2 | v >> 4), n = 15 & v, i = 2) : 2 == i ? (r += s(n), r += s(v >> 2), n = 3 & v, i = 3) : (r += s(n << 2 | v >> 4), r += s(15 & v), i = 0));
            return 1 == i && (r += s(n << 2)), r;
        }
        function xn(e) {
            var t, n = Sn(e), r = new Array();
            for (t = 0; 2 * t < n.length; ++t)
                r[t] = parseInt(n.substring(2 * t, 2 * t + 2), 16);
            return r;
        }
        var Tn, Nn = 244837814094590, Cn = 15715070 == (16777215 & Nn);
        Cn && 'Microsoft Internet Explorer' == navigator.appName ? (e.prototype.am = r, Tn = 30) : Cn && 'Netscape' != navigator.appName ? (e.prototype.am = n, Tn = 26) : (e.prototype.am = i, Tn = 28);
        e.prototype.DB = Tn;
        e.prototype.FV = Math.pow(2, kn);
        e.prototype.F1 = kn - Tn;
        e.prototype.F2 = 2 * Tn - kn;
        e.prototype.DV = 1 << Tn;
        var kn = 52;
        L.prototype.convert = A;
        L.prototype.revert = O;
        e.prototype.chunkSize = J;
        e.prototype.toRadix = Q;
        e.prototype.fromRadix = G;
        on.prototype.nextBytes = sn;
        cn.prototype.doPublic = pn;
        cn.prototype.setPublic = hn;
        cn.prototype.encrypt = dn;
        zn.env.parseUA = function (e) {
            var t, n = function (e) {
                var t = 0;
                return parseFloat(e.replace(/\./g, function () {
                    return 1 == t++ ? '' : '.';
                }));
            }, r = navigator, i = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: r && r.cajaVersion,
                secure: false,
                os: null
            }, s = e || navigator && navigator.userAgent, o = window && window.location, u = o && o.href;
            return i.secure = u && 0 === u.toLowerCase().indexOf('https'), s && (/windows|win32/i.test(s) ? i.os = 'windows' : /macintosh/i.test(s) ? i.os = 'macintosh' : /rhino/i.test(s) && (i.os = 'rhino'), /KHTML/.test(s) && (i.webkit = 1), t = s.match(/AppleWebKit\/([^\s]*)/), t && t[1] && (i.webkit = n(t[1]), / Mobile\//.test(s) ? (i.mobile = 'Apple', t = s.match(/OS ([^\s]*)/), t && t[1] && (t = n(t[1].replace('_', '.'))), i.ios = t, i.ipad = i.ipod = i.iphone = 0, t = s.match(/iPad|iPod|iPhone/), t && t[0] && (i[t[0].toLowerCase()] = i.ios)) : (t = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), t && (i.mobile = t[0]), /webOS/.test(s) && (i.mobile = 'WebOS', t = s.match(/webOS\/([^\s]*);/), t && t[1] && (i.webos = n(t[1]))), / Android/.test(s) && (i.mobile = 'Android', t = s.match(/Android ([^\s]*);/), t && t[1] && (i.android = n(t[1])))), t = s.match(/Chrome\/([^\s]*)/), t && t[1] ? i.chrome = n(t[1]) : (t = s.match(/AdobeAIR\/([^\s]*)/), t && (i.air = t[0]))), i.webkit || (t = s.match(/Opera[\s\/]([^\s]*)/), t && t[1] ? (i.opera = n(t[1]), t = s.match(/Version\/([^\s]*)/), t && t[1] && (i.opera = n(t[1])), t = s.match(/Opera Mini[^;]*/), t && (i.mobile = t[0])) : (t = s.match(/MSIE\s([^;]*)/), t && t[1] ? i.ie = n(t[1]) : (t = s.match(/Gecko\/([^\s]*)/), t && (i.gecko = 1, t = s.match(/rv:([^\s\)]*)/), t && t[1] && (i.gecko = n(t[1]))))))), i;
        };
        zn.env.ua = zn.env.parseUA();
        Jn.prototype = new cn();
        Jn.prototype.constructor = Jn;
        zn._IEEnumFix = zn.env.ua.ie ? function (e, t) {
            var n, r, i;
            for (n = 0; n < $n.length; n += 1)
                r = $n[n], i = t[r], Wn.isFunction(i) && i != Xn[r] && (e[r] = i);
        } : function () {
        };
        zn.extend = function (e, t, n) {
            if (!t || !e)
                throw new Error('extend failed, please check that all dependencies are included.');
            var r, i = function () {
            };
            if (i.prototype = t.prototype, e.prototype = new i(), e.prototype.constructor = e, e.superclass = t.prototype, t.prototype.constructor == Xn.constructor && (t.prototype.constructor = t), n) {
                for (r in n)
                    Wn.hasOwnProperty(n, r) && (e.prototype[r] = n[r]);
                Wn._IEEnumFix(e.prototype, n);
            }
        };
        'undefined' != typeof KJUR && KJUR || (KJUR = {});
        'undefined' != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {});
        KJUR.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (e) {
                var t = e.toString(16);
                return t.length % 2 == 1 && (t = '0' + t), t;
            };
            this.bigIntToMinTwosComplementsHex = function (t) {
                var n = t.toString(16);
                if ('-' != n.substr(0, 1))
                    n.length % 2 == 1 ? n = '0' + n : n.match(/^[0-7]/) || (n = '00' + n);
                else {
                    var r = n.substr(1), i = r.length;
                    if (i % 2 == 1) {
                        i += 1;
                    } else {
                        n.match(/^[0-7]/) || (i += 2);
                    }
                    for (var s = '', o = 0; i > o; o++)
                        s += 'f';
                    var u = new e(s, 16), a = u.xor(t).add(e.ONE);
                    n = a.toString(16).replace(/^-/, '');
                }
                return n;
            };
            this.getPEMStringFromHex = function (e, t) {
                var n = CryptoJS.enc.Hex.parse(e), r = CryptoJS.enc.Base64.stringify(n), i = r.replace(/(.{64})/g, '$1\r\n');
                return i = i.replace(/\r\n$/, ''), '-----BEGIN ' + t + '-----\r\n' + i + '\r\n-----END ' + t + '-----\r\n';
            };
        }();
        KJUR.asn1.ASN1Object = function () {
            var e = '';
            this.getLengthHexFromValue = function () {
                if ('undefined' == typeof this.hV || null == this.hV)
                    throw 'this.hV is null or undefined.';
                if (this.hV.length % 2 == 1)
                    throw 'value hex must be even length: n=' + e.length + ',v=' + this.hV;
                var t = this.hV.length / 2, n = t.toString(16);
                if (n.length % 2 == 1 && (n = '0' + n), 128 > t)
                    return n;
                var r = n.length / 2;
                if (r > 15)
                    throw 'ASN.1 length too long to represent by 8x: n = ' + t.toString(16);
                var i = 128 + r;
                return i.toString(16) + n;
            };
            this.getEncodedHex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = false), this.hTLV;
            };
            this.getValueHex = function () {
                return this.getEncodedHex(), this.hV;
            };
            this.getFreshValueHex = function () {
                return '';
            };
        };
        KJUR.asn1.DERAbstractString = function (e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
                return this.s;
            };
            this.setString = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = e;
                this.hV = stohex(this.s);
            };
            this.setStringHex = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = e;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex && this.setStringHex(e.hex));
        };
        zn.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERAbstractTime = function () {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (e) {
                utc = e.getTime() + 60000 * e.getTimezoneOffset();
                var t = new Date(utc);
                return t;
            };
            this.formatDate = function (e, t) {
                var n = this.zeroPadding, r = this.localDateToUTC(e), i = String(r.getFullYear());
                'utc' == t && (i = i.substr(2, 2));
                var s = n(String(r.getMonth() + 1), 2), o = n(String(r.getDate()), 2), u = n(String(r.getHours()), 2), a = n(String(r.getMinutes()), 2), f = n(String(r.getSeconds()), 2);
                return i + s + o + u + a + f + 'Z';
            };
            this.zeroPadding = function (e, t) {
                return e.length >= t ? e : new Array(t - e.length + 1).join('0') + e;
            };
            this.getString = function () {
                return this.s;
            };
            this.setString = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = e;
                this.hV = stohex(this.s);
            };
            this.setByDateValue = function (e, t, n, r, i, s) {
                var o = new Date(Date.UTC(e, t - 1, n, r, i, s, 0));
                this.setByDate(o);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
        };
        zn.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERAbstractStructured = function (e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.asn1Array = e;
            };
            this.appendASN1Object = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.asn1Array.push(e);
            };
            this.asn1Array = new Array();
            'undefined' != typeof e && 'undefined' != typeof e.array && (this.asn1Array = e.array);
        };
        zn.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERBoolean = function () {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this);
            this.hT = '01';
            this.hTLV = '0101ff';
        };
        zn.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERInteger = function (t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this);
            this.hT = '02';
            this.setByBigInteger = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
            };
            this.setByInteger = function (t) {
                var n = new e(String(t), 10);
                this.setByBigInteger(n);
            };
            this.setValueHex = function (e) {
                this.hV = e;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof t && ('undefined' != typeof t.bigint ? this.setByBigInteger(t.bigint) : 'undefined' != typeof t.int ? this.setByInteger(t.int) : 'undefined' != typeof t.hex && this.setValueHex(t.hex));
        };
        zn.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERBitString = function (e) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this);
            this.hT = '03';
            this.setHexValueIncludingUnusedBits = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.hV = e;
            };
            this.setUnusedBitsAndHexValue = function (e, t) {
                if (0 > e || e > 7)
                    throw 'unused bits shall be from 0 to 7: u = ' + e;
                var n = '0' + e;
                this.hTLV = null;
                this.isModified = true;
                this.hV = n + t;
            };
            this.setByBinaryString = function (e) {
                e = e.replace(/0+$/, '');
                var t = 8 - e.length % 8;
                8 == t && (t = 0);
                for (var n = 0; t >= n; n++)
                    e += '0';
                for (var r = '', n = 0; n < e.length - 1; n += 8) {
                    var i = e.substr(n, 8), s = parseInt(i, 2).toString(16);
                    1 == s.length && (s = '0' + s);
                    r += s;
                }
                this.hTLV = null;
                this.isModified = true;
                this.hV = '0' + t + r;
            };
            this.setByBooleanArray = function (e) {
                for (var t = '', n = 0; n < e.length; n++)
                    t += 1 == e[n] ? '1' : '0';
                this.setByBinaryString(t);
            };
            this.newFalseArray = function (e) {
                for (var t = new Array(e), n = 0; e > n; n++)
                    t[n] = false;
                return t;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : 'undefined' != typeof e.bin ? this.setByBinaryString(e.bin) : 'undefined' != typeof e.array && this.setByBooleanArray(e.array));
        };
        zn.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
        KJUR.asn1.DEROctetString = function (e) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, e);
            this.hT = '04';
        };
        zn.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERNull = function () {
            KJUR.asn1.DERNull.superclass.constructor.call(this);
            this.hT = '05';
            this.hTLV = '0500';
        };
        zn.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERObjectIdentifier = function (t) {
            var n = function (e) {
                var t = e.toString(16);
                return 1 == t.length && (t = '0' + t), t;
            }, r = function (t) {
                var r = '', i = new e(t, 10), s = i.toString(2), o = 7 - s.length % 7;
                7 == o && (o = 0);
                for (var u = '', a = 0; o > a; a++)
                    u += '0';
                s = u + s;
                for (var a = 0; a < s.length - 1; a += 7) {
                    var f = s.substr(a, 7);
                    a != s.length - 7 && (f = '1' + f);
                    r += n(parseInt(f, 2));
                }
                return r;
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
            this.hT = '06';
            this.setValueHex = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = e;
            };
            this.setValueOidString = function (e) {
                if (!e.match(/^[0-9.]+$/))
                    throw 'malformed oid string: ' + e;
                var t = '', i = e.split('.'), s = 40 * parseInt(i[0]) + parseInt(i[1]);
                t += n(s);
                i.splice(0, 2);
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = t;
                this.hTLV = null, this.isModified = true, this.s = null, this.hV = t;
            };
            this.setValueName = function (e) {
                if ('undefined' == typeof KJUR.asn1.x509.OID.name2oidList[e])
                    throw 'DERObjectIdentifier oidName undefined: ' + e;
                var t = KJUR.asn1.x509.OID.name2oidList[e];
                this.setValueOidString(t);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof t && ('undefined' != typeof t.oid ? this.setValueOidString(t.oid) : 'undefined' != typeof t.hex ? this.setValueHex(t.hex) : 'undefined' != typeof t.name && this.setValueName(t.name));
        };
        zn.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
        KJUR.asn1.DERUTF8String = function (e) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, e);
            this.hT = '0c';
        };
        zn.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERNumericString = function (e) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, e);
            this.hT = '12';
        };
        zn.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERPrintableString = function (e) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, e);
            this.hT = '13';
        };
        zn.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERTeletexString = function (e) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, e);
            this.hT = '14';
        };
        zn.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERIA5String = function (e) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, e);
            this.hT = '16';
        };
        zn.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
        KJUR.asn1.DERUTCTime = function (e) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, e);
            this.hT = '17';
            this.setByDate = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.date = e;
                this.s = this.formatDate(this.date, 'utc');
                this.hV = stohex(this.s);
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex ? this.setStringHex(e.hex) : 'undefined' != typeof e.date && this.setByDate(e.date));
        };
        zn.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
        KJUR.asn1.DERGeneralizedTime = function (e) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, e);
            this.hT = '18';
            this.setByDate = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.date = e;
                this.s = this.formatDate(this.date, 'gen');
                this.hV = stohex(this.s);
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex ? this.setStringHex(e.hex) : 'undefined' != typeof e.date && this.setByDate(e.date));
        };
        zn.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
        KJUR.asn1.DERSequence = function (e) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, e);
            this.hT = '30';
            this.getFreshValueHex = function () {
                for (var e = '', t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e += n.getEncodedHex();
                }
                return this.hV = e, this.hV;
            };
        };
        zn.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
        KJUR.asn1.DERSet = function (e) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, e);
            this.hT = '31';
            this.getFreshValueHex = function () {
                for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e.push(n.getEncodedHex());
                }
                return e.sort(), this.hV = e.join(''), this.hV;
            };
        };
        zn.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
        KJUR.asn1.DERTaggedObject = function (e) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
            this.hT = 'a0';
            this.hV = '';
            this.isExplicit = true;
            this.asn1Object = null;
            this.setASN1Object = function (e, t, n) {
                this.hT = t;
                this.isExplicit = e;
                this.asn1Object = n;
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = true) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, t), this.isModified = false);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.tag && (this.hT = e.tag), 'undefined' != typeof e.explicit && (this.isExplicit = e.explicit), 'undefined' != typeof e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
        };
        zn.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
        (function (e) {
            var t, n = {};
            n.decode = function (n) {
                var r;
                if (t === e) {
                    var i = '0123456789ABCDEF', s = ' \f\n\r\t\xA0\u2028\u2029';
                    for (t = [], r = 0; 16 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (i = i.toLowerCase(), r = 10; 16 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (r = 0; r < s.length; ++r)
                        t[s.charAt(r)] = -1;
                }
                var o = [], u = 0, a = 0;
                for (r = 0; r < n.length; ++r) {
                    var f = n.charAt(r);
                    if ('=' == f)
                        break;
                    if (f = t[f], -1 != f) {
                        if (f === e)
                            throw 'Illegal character at offset ' + r;
                        u |= f;
                        ++a >= 2 ? (o[o.length] = u, u = 0, a = 0) : u <<= 4;
                    }
                }
                if (a)
                    throw 'Hex encoding incomplete: 4 bits missing';
                return o;
            };
            window.Hex = n;
        }());
        (function (e) {
            var t, n = {};
            n.decode = function (n) {
                var r;
                if (t === e) {
                    var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = '= \f\n\r\t\xA0\u2028\u2029';
                    for (t = [], r = 0; 64 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (r = 0; r < s.length; ++r)
                        t[s.charAt(r)] = -1;
                }
                var o = [], u = 0, a = 0;
                for (r = 0; r < n.length; ++r) {
                    var f = n.charAt(r);
                    if ('=' == f)
                        break;
                    if (f = t[f], -1 != f) {
                        if (f === e)
                            throw 'Illegal character at offset ' + r;
                        u |= f;
                        ++a >= 4 ? (o[o.length] = u >> 16, o[o.length] = u >> 8 & 255, o[o.length] = 255 & u, u = 0, a = 0) : u <<= 6;
                    }
                }
                switch (a) {
                    case 1:
                        throw 'Base64 encoding incomplete: at least 2 bits missing';
                    case 2:
                        o[o.length] = u >> 10;
                        break;
                    case 3:
                        o[o.length] = u >> 16, o[o.length] = u >> 8 & 255;
                }
                return o;
            };
            n.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
            n.unarmor = function (e) {
                var t = n.re.exec(e);
                if (t)
                    if (t[1])
                        e = t[1];
                    else {
                        if (!t[2])
                            throw 'RegExp out of sync';
                        e = t[2];
                    }
                return n.decode(e);
            };
            window.Base64 = n;
        }());
        (function (e) {
            function t(e, n) {
                if (e instanceof t) {
                    this.enc = e.enc, this.pos = e.pos;
                } else {
                    this.enc = e, this.pos = n;
                }
            }
            function n(e, t, n, r, i) {
                this.stream = e;
                this.header = t;
                this.length = n;
                this.tag = r;
                this.sub = i;
            }
            var r = 100, i = '\u2026', s = {
                tag: function (e, t) {
                    var n = document.createElement(e);
                    return n.className = t, n;
                },
                text: function (e) {
                    return document.createTextNode(e);
                }
            };
            t.prototype.get = function (t) {
                if (t === e && (t = this.pos++), t >= this.enc.length)
                    throw 'Requesting byte offset ' + t + ' on a stream of length ' + this.enc.length;
                return this.enc[t];
            };
            t.prototype.hexDigits = '0123456789ABCDEF';
            t.prototype.hexByte = function (e) {
                return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e);
            };
            t.prototype.hexDump = function (e, t, n) {
                for (var r = '', i = e; t > i; ++i)
                    if (r += this.hexByte(this.get(i)), n !== true)
                        switch (15 & i) {
                            case 7:
                                r += '  ';
                                break;
                            case 15:
                                r += '\n';
                                break;
                            default:
                                r += ' ';
                        }
                return r;
            };
            t.prototype.parseStringISO = function (e, t) {
                for (var n = '', r = e; t > r; ++r)
                    n += String.fromCharCode(this.get(r));
                return n;
            };
            t.prototype.parseStringUTF = function (e, t) {
                for (var n = '', r = e; t > r;) {
                    var i = this.get(r++);
                    n += String.fromCharCode(128 > i ? i : i > 191 && 224 > i ? (31 & i) << 6 | 63 & this.get(r++) : (15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
                }
                return n;
            };
            t.prototype.parseStringBMP = function (e, t) {
                for (var n = '', r = e; t > r; r += 2) {
                    var i = this.get(r), s = this.get(r + 1);
                    n += String.fromCharCode((i << 8) + s);
                }
                return n;
            };
            t.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            t.prototype.parseTime = function (e, t) {
                var n = this.parseStringISO(e, t), r = this.reTime.exec(n);
                return r ? (n = r[1] + '-' + r[2] + '-' + r[3] + ' ' + r[4], r[5] && (n += ':' + r[5], r[6] && (n += ':' + r[6], r[7] && (n += '.' + r[7]))), r[8] && (n += ' UTC', 'Z' != r[8] && (n += r[8], r[9] && (n += ':' + r[9]))), n) : 'Unrecognized time: ' + n;
            };
            t.prototype.parseInteger = function (e, t) {
                var n = t - e;
                if (n > 4) {
                    n <<= 3;
                    var r = this.get(e);
                    if (0 === r)
                        n -= 8;
                    else
                        for (; 128 > r;)
                            r <<= 1, --n;
                    return '(' + n + ' bit)';
                }
                for (var i = 0, s = e; t > s; ++s)
                    i = i << 8 | this.get(s);
                return i;
            };
            t.prototype.parseBitString = function (e, t) {
                var n = this.get(e), r = (t - e - 1 << 3) - n, i = '(' + r + ' bit)';
                if (20 >= r) {
                    var s = n;
                    i += ' ';
                    for (var o = t - 1; o > e; --o) {
                        for (var u = this.get(o), a = s; 8 > a; ++a)
                            i += u >> a & 1 ? '1' : '0';
                        s = 0;
                    }
                }
                return i;
            };
            t.prototype.parseOctetString = function (e, t) {
                var n = t - e, s = '(' + n + ' byte) ';
                n > r && (t = e + r);
                for (var o = e; t > o; ++o)
                    s += this.hexByte(this.get(o));
                return n > r && (s += i), s;
            };
            t.prototype.parseOID = function (e, t) {
                for (var n = '', r = 0, i = 0, s = e; t > s; ++s) {
                    var o = this.get(s);
                    if (r = r << 7 | 127 & o, i += 7, !(128 & o)) {
                        if ('' === n) {
                            var u = 80 > r ? 40 > r ? 0 : 1 : 2;
                            n = u + '.' + (r - 40 * u);
                        } else
                            n += '.' + (i >= 31 ? 'bigint' : r);
                        r = i = 0;
                    }
                }
                return n;
            };
            n.prototype.typeName = function () {
                if (this.tag === e)
                    return 'unknown';
                var t = this.tag >> 6, n = (this.tag >> 5 & 1, 31 & this.tag);
                switch (t) {
                    case 0:
                        switch (n) {
                            case 0:
                                return 'EOC';
                            case 1:
                                return 'BOOLEAN';
                            case 2:
                                return 'INTEGER';
                            case 3:
                                return 'BIT_STRING';
                            case 4:
                                return 'OCTET_STRING';
                            case 5:
                                return 'NULL';
                            case 6:
                                return 'OBJECT_IDENTIFIER';
                            case 7:
                                return 'ObjectDescriptor';
                            case 8:
                                return 'EXTERNAL';
                            case 9:
                                return 'REAL';
                            case 10:
                                return 'ENUMERATED';
                            case 11:
                                return 'EMBEDDED_PDV';
                            case 12:
                                return 'UTF8String';
                            case 16:
                                return 'SEQUENCE';
                            case 17:
                                return 'SET';
                            case 18:
                                return 'NumericString';
                            case 19:
                                return 'PrintableString';
                            case 20:
                                return 'TeletexString';
                            case 21:
                                return 'VideotexString';
                            case 22:
                                return 'IA5String';
                            case 23:
                                return 'UTCTime';
                            case 24:
                                return 'GeneralizedTime';
                            case 25:
                                return 'GraphicString';
                            case 26:
                                return 'VisibleString';
                            case 27:
                                return 'GeneralString';
                            case 28:
                                return 'UniversalString';
                            case 30:
                                return 'BMPString';
                            default:
                                return 'Universal_' + n.toString(16);
                        }
                        ;
                    case 1:
                        return 'Application_' + n.toString(16);
                    case 2:
                        return '[' + n + ']';
                    case 3:
                        return 'Private_' + n.toString(16);
                }
            };
            n.prototype.reSeemsASCII = /^[ -~]+$/;
            n.prototype.content = function () {
                if (this.tag === e)
                    return null;
                var t = this.tag >> 6, n = 31 & this.tag, s = this.posContent(), o = Math.abs(this.length);
                if (0 !== t) {
                    if (null !== this.sub)
                        return '(' + this.sub.length + ' elem)';
                    var u = this.stream.parseStringISO(s, s + Math.min(o, r));
                    return this.reSeemsASCII.test(u) ? u.substring(0, 2 * r) + (u.length > 2 * r ? i : '') : this.stream.parseOctetString(s, s + o);
                }
                switch (n) {
                    case 1:
                        return 0 === this.stream.get(s) ? 'false' : 'true';
                    case 2:
                        return this.stream.parseInteger(s, s + o);
                    case 3:
                        return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseBitString(s, s + o);
                    case 4:
                        return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseOctetString(s, s + o);
                    case 6:
                        return this.stream.parseOID(s, s + o);
                    case 16:
                    case 17:
                        return '(' + this.sub.length + ' elem)';
                    case 12:
                        return this.stream.parseStringUTF(s, s + o);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return this.stream.parseStringISO(s, s + o);
                    case 30:
                        return this.stream.parseStringBMP(s, s + o);
                    case 23:
                    case 24:
                        return this.stream.parseTime(s, s + o);
                }
                return null;
            };
            n.prototype.toString = function () {
                return this.typeName() + '@' + this.stream.pos + '[header:' + this.header + ',length:' + this.length + ',sub:' + (null === this.sub ? 'null' : this.sub.length) + ']';
            };
            n.prototype.print = function (t) {
                if (t === e && (t = ''), document.writeln(t + this), null !== this.sub) {
                    t += '  ';
                    for (var n = 0, r = this.sub.length; r > n; ++n)
                        this.sub[n].print(t);
                }
            };
            n.prototype.toPrettyString = function (t) {
                t === e && (t = '');
                var n = t + this.typeName() + ' @' + this.stream.pos;
                if (this.length >= 0 && (n += '+'), n += this.length, 32 & this.tag ? n += ' (constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (n += ' (encapsulates)'), n += '\n', null !== this.sub) {
                    t += '  ';
                    for (var r = 0, i = this.sub.length; i > r; ++r)
                        n += this.sub[r].toPrettyString(t);
                }
                return n;
            };
            n.prototype.toDOM = function () {
                var e = s.tag('div', 'node');
                e.asn1 = this;
                var t = s.tag('div', 'head'), n = this.typeName().replace(/_/g, ' ');
                t.innerHTML = n;
                var r = this.content();
                if (null !== r) {
                    r = String(r).replace(/</g, '&lt;');
                    var i = s.tag('span', 'preview');
                    i.appendChild(s.text(r));
                    t.appendChild(i);
                }
                e.appendChild(t);
                this.node = e;
                this.head = t;
                o.innerHTML = n;
                e.appendChild(o);
                if (n = 'Offset: ' + this.stream.pos + '<br/>', n += 'Length: ' + this.header + '+', n += this.length >= 0 ? this.length : -this.length + ' (undefined)', 32 & this.tag ? n += '<br/>(constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (n += '<br/>(encapsulates)'), null !== r && (n += '<br/>Value:<br/><b>' + r + '</b>', 'object' == typeof oids && 6 == this.tag)) {
                    var u = oids[r];
                    u && (u.d && (n += '<br/>' + u.d), u.c && (n += '<br/>' + u.c), u.w && (n += '<br/>(warning!)'));
                }
                o.innerHTML = n, e.appendChild(o);
                var a = s.tag('div', 'sub');
                if (null !== this.sub)
                    for (var f = 0, l = this.sub.length; l > f; ++f)
                        a.appendChild(this.sub[f].toDOM());
                return e.appendChild(a), t.onclick = function () {
                    e.className = 'node collapsed' == e.className ? 'node' : 'node collapsed';
                }, e;
            };
            n.prototype.posStart = function () {
                return this.stream.pos;
            };
            n.prototype.posContent = function () {
                return this.stream.pos + this.header;
            };
            n.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length);
            };
            n.prototype.fakeHover = function (e) {
                this.node.className += ' hover';
                e && (this.head.className += ' hover');
            };
            n.prototype.fakeOut = function (e) {
                var t = / ?hover/;
                this.node.className = this.node.className.replace(t, '');
                e && (this.head.className = this.head.className.replace(t, ''));
            };
            n.prototype.toHexDOM_sub = function (e, t, n, r, i) {
                if (!(r >= i)) {
                    var o = s.tag('span', t);
                    o.appendChild(s.text(n.hexDump(r, i)));
                    e.appendChild(o);
                }
            };
            n.prototype.toHexDOM = function (t) {
                var n = s.tag('span', 'hex');
                if (t === e && (t = n), this.head.hexNode = n, this.head.onmouseover = function () {
                        this.hexNode.className = 'hexCurrent';
                    }, this.head.onmouseout = function () {
                        this.hexNode.className = 'hex';
                    }, n.asn1 = this, n.onmouseover = function () {
                        var e = !t.selected;
                        e && (t.selected = this.asn1, this.className = 'hexCurrent');
                        this.asn1.fakeHover(e);
                    }, n.onmouseout = function () {
                        var e = t.selected == this.asn1;
                        this.asn1.fakeOut(e);
                        e && (t.selected = null, this.className = 'hex');
                    }, this.toHexDOM_sub(n, 'tag', this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(n, this.length >= 0 ? 'dlen' : 'ulen', this.stream, this.posStart() + 1, this.posContent()), null === this.sub)
                    n.appendChild(s.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var r = this.sub[0], i = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(n, 'intro', this.stream, this.posContent(), r.posStart());
                    for (var o = 0, u = this.sub.length; u > o; ++o)
                        n.appendChild(this.sub[o].toHexDOM(t));
                    this.toHexDOM_sub(n, 'outro', this.stream, i.posEnd(), this.posEnd());
                }
                return n;
            };
            n.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), true);
            };
            n.decodeLength = function (e) {
                var t = e.get(), n = 127 & t;
                if (n == t)
                    return n;
                if (n > 3)
                    throw 'Length over 24 bits not supported at position ' + (e.pos - 1);
                if (0 === n)
                    return -1;
                t = 0;
                for (var r = 0; n > r; ++r)
                    t = t << 8 | e.get();
                return t;
            };
            n.hasContent = function (e, r, i) {
                if (32 & e)
                    return true;
                if (3 > e || e > 4)
                    return false;
                var s = new t(i);
                3 == e && s.get();
                var o = s.get();
                if (o >> 6 & 1)
                    return false;
                try {
                    var u = n.decodeLength(s);
                    return s.pos - i.pos + u == r;
                } catch (a) {
                    return false;
                }
            };
            n.decode = function (e) {
                e instanceof t || (e = new t(e, 0));
                var r = new t(e), i = e.get(), s = n.decodeLength(e), o = e.pos - r.pos, u = null;
                if (n.hasContent(i, s, e)) {
                    var a = e.pos;
                    if (3 == i && e.get(), u = [], s >= 0) {
                        for (var f = a + s; e.pos < f;)
                            u[u.length] = n.decode(e);
                        if (e.pos != f)
                            throw 'Content size is not correct for container starting at offset ' + a;
                    } else
                        try {
                            for (;;) {
                                var l = n.decode(e);
                                if (0 === l.tag)
                                    break;
                                u[u.length] = l;
                            }
                            s = a - e.pos;
                        } catch (c) {
                            throw 'Exception while decoding undefined length content: ' + c;
                        }
                } else
                    e.pos += s;
                return new n(r, o, s, i, u);
            };
            n.test = function () {
                for (var e = [
                    {
                        value: [39],
                        expected: 39
                    },
                    {
                        value: [
                            129,
                            201
                        ],
                        expected: 201
                    },
                    {
                        value: [
                            131,
                            254,
                            220,
                            186
                        ],
                        expected: 16702650
                    }
                ], r = 0, i = e.length; i > r; ++r) {
                    var s = new t(e[r].value, 0), o = n.decodeLength(s);
                    o != e[r].expected && document.write('In test[' + r + '] expected ' + e[r].expected + ' got ' + o + '\n');
                }
            };
            window.ASN1 = n;
        }());
        ASN1.prototype.getHexStringValue = function () {
            var e = this.toHexString(), t = 2 * this.header, n = 2 * this.length;
            return e.substr(t, n);
        };
        cn.prototype.parseKey = function (e) {
            try {
                var t = 0, n = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, i = r.test(e) ? Hex.decode(e) : Base64.unarmor(e), s = ASN1.decode(i);
                if (9 === s.sub.length) {
                    t = s.sub[1].getHexStringValue();
                    this.n = un(t, 16);
                    n = s.sub[2].getHexStringValue();
                    this.e = parseInt(n, 16);
                    var o = s.sub[3].getHexStringValue();
                    this.d = un(o, 16);
                    var u = s.sub[4].getHexStringValue();
                    this.p = un(u, 16);
                    var a = s.sub[5].getHexStringValue();
                    this.q = un(a, 16);
                    var f = s.sub[6].getHexStringValue();
                    this.dmp1 = un(f, 16);
                    var l = s.sub[7].getHexStringValue();
                    this.dmq1 = un(l, 16);
                    var c = s.sub[8].getHexStringValue();
                    this.coeff = un(c, 16);
                } else {
                    if (2 !== s.sub.length)
                        return false;
                    var h = s.sub[1], p = h.sub[0];
                    t = p.sub[0].getHexStringValue();
                    this.n = un(t, 16);
                    n = p.sub[1].getHexStringValue();
                    this.e = parseInt(n, 16);
                }
                return true;
            } catch (d) {
                return false;
            }
        };
        cn.prototype.getPrivateBaseKey = function () {
            var e = {
                array: [
                    new KJUR.asn1.DERInteger({ 'int': 0 }),
                    new KJUR.asn1.DERInteger({ bigint: this.n }),
                    new KJUR.asn1.DERInteger({ 'int': this.e }),
                    new KJUR.asn1.DERInteger({ bigint: this.d }),
                    new KJUR.asn1.DERInteger({ bigint: this.p }),
                    new KJUR.asn1.DERInteger({ bigint: this.q }),
                    new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
                    new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
                    new KJUR.asn1.DERInteger({ bigint: this.coeff })
                ]
            }, t = new KJUR.asn1.DERSequence(e);
            return t.getEncodedHex();
        };
        cn.prototype.getPrivateBaseKeyB64 = function () {
            return En(this.getPrivateBaseKey());
        };
        cn.prototype.getPublicBaseKey = function () {
            var e = {
                array: [
                    new KJUR.asn1.DERObjectIdentifier({ oid: '1.2.840.113549.1.1.1' }),
                    new KJUR.asn1.DERNull()
                ]
            }, t = new KJUR.asn1.DERSequence(e);
            e = {
                array: [
                    new KJUR.asn1.DERInteger({ bigint: this.n }),
                    new KJUR.asn1.DERInteger({ 'int': this.e })
                ]
            };
            var n = new KJUR.asn1.DERSequence(e);
            e = { hex: '00' + n.getEncodedHex() };
            var r = new KJUR.asn1.DERBitString(e);
            e = {
                array: [
                    t,
                    r
                ]
            };
            var i = new KJUR.asn1.DERSequence(e);
            return i.getEncodedHex();
        };
        cn.prototype.getPublicBaseKeyB64 = function () {
            return En(this.getPublicBaseKey());
        };
        cn.prototype.wordwrap = function (e, t) {
            if (t = t || 64, !e)
                return e;
            var n = '(.{1,' + t + '})( +|$\n?)|(.{1,' + t + '})';
            return e.match(RegExp(n, 'g')).join('\n');
        };
        cn.prototype.getPrivateKey = function () {
            var e = '-----BEGIN RSA PRIVATE KEY-----\n';
            return e += this.wordwrap(this.getPrivateBaseKeyB64()) + '\n', e += '-----END RSA PRIVATE KEY-----';
        };
        cn.prototype.getPublicKey = function () {
            var e = '-----BEGIN PUBLIC KEY-----\n';
            return e += this.wordwrap(this.getPublicBaseKeyB64()) + '\n', e += '-----END PUBLIC KEY-----';
        };
        cn.prototype.hasPublicKeyProperty = function (e) {
            return e = e || {}, e.hasOwnProperty('n') && e.hasOwnProperty('e');
        };
        cn.prototype.hasPrivateKeyProperty = function (e) {
            return e = e || {}, e.hasOwnProperty('n') && e.hasOwnProperty('e') && e.hasOwnProperty('d') && e.hasOwnProperty('p') && e.hasOwnProperty('q') && e.hasOwnProperty('dmp1') && e.hasOwnProperty('dmq1') && e.hasOwnProperty('coeff');
        };
        cn.prototype.parsePropertiesFrom = function (e) {
            this.n = e.n;
            this.e = e.e;
            e.hasOwnProperty('d') && (this.d = e.d, this.p = e.p, this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
        };
        cn.prototype.setPrivate = mn;
        cn.prototype.setPrivateEx = gn;
        cn.prototype.generate = yn;
        cn.prototype.decrypt = wn;
        (function () {
            var n = function (n, r, i) {
                var s = new on(), o = n >> 1;
                this.e = parseInt(r, 16);
                var u = new e(r, 16), a = this, f = function () {
                    var r = function () {
                        if (a.p.compareTo(a.q) <= 0) {
                            var t = a.p;
                            a.p = a.q;
                            a.q = t;
                        }
                        var n = a.p.subtract(e.ONE), r = a.q.subtract(e.ONE), s = n.multiply(r);
                        if (0 == s.gcd(u).compareTo(e.ONE)) {
                            a.n = a.p.multiply(a.q), a.d = u.modInverse(s), a.dmp1 = a.d.mod(n), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout(function () {
                                i();
                            }, 0);
                        } else {
                            setTimeout(f, 0);
                        }
                    }, l = function () {
                        a.q = t();
                        a.q.fromNumberAsync(o, 1, s, function () {
                            a.q.subtract(e.ONE).gcda(u, function (t) {
                                if (0 == t.compareTo(e.ONE) && a.q.isProbablePrime(10)) {
                                    setTimeout(r, 0);
                                } else {
                                    setTimeout(l, 0);
                                }
                            });
                        });
                    }, c = function () {
                        a.p = t();
                        a.p.fromNumberAsync(n - o, 1, s, function () {
                            a.p.subtract(e.ONE).gcda(u, function (t) {
                                if (0 == t.compareTo(e.ONE) && a.p.isProbablePrime(10)) {
                                    setTimeout(l, 0);
                                } else {
                                    setTimeout(c, 0);
                                }
                            });
                        });
                    };
                    setTimeout(c, 0);
                };
                setTimeout(f, 0);
            };
            cn.prototype.generateAsync = n;
            var r = function (e, t) {
                var n = this.s < 0 ? this.negate() : this.clone(), r = e.s < 0 ? e.negate() : e.clone();
                if (n.compareTo(r) < 0) {
                    var i = n;
                    n = r;
                    r = i;
                }
                var s = n.getLowestSetBit(), o = r.getLowestSetBit();
                if (0 > o)
                    return void t(n);
                o > s && (o = s);
                o > 0 && (n.rShiftTo(o, n), r.rShiftTo(o, r));
                var u = function () {
                    (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n);
                    (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r);
                    n.compareTo(r) >= 0 ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r));
                    n.signum() > 0 ? setTimeout(u, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function () {
                        t(r);
                    }, 0));
                };
                setTimeout(u, 10);
            };
            e.prototype.gcda = r;
            var i = function (t, n, r, i) {
                if ('number' == typeof n)
                    if (2 > t)
                        this.fromInt(1);
                    else {
                        this.fromNumber(t, r);
                        this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ot, this);
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this, o = function () {
                            s.dAddOffset(2, 0);
                            s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s);
                            s.isProbablePrime(n) ? setTimeout(function () {
                                i();
                            }, 0) : setTimeout(o, 0);
                        };
                        setTimeout(o, 0);
                    }
                else {
                    var u = new Array(), a = 7 & t;
                    u.length = (t >> 3) + 1;
                    n.nextBytes(u);
                    a > 0 ? u[0] &= (1 << a) - 1 : u[0] = 0;
                    this.fromString(u, 256);
                }
            };
            e.prototype.fromNumberAsync = i;
        }());
        e.prototype.bitwiseTo = rt;
        e.prototype.changeBit = wt;
        e.prototype.addTo = Tt;
        e.prototype.dMultiply = _t;
        e.prototype.dAddOffset = Dt;
        e.prototype.multiplyLowerTo = It;
        e.prototype.multiplyUpperTo = qt;
        e.prototype.modInt = Kt;
        e.prototype.millerRabin = Yt;
        e.prototype.clone = W;
        e.prototype.intValue = X;
        e.prototype.byteValue = V;
        e.prototype.shortValue = $;
        e.prototype.signum = K;
        e.prototype.toByteArray = Z;
        e.prototype.equals = et;
        e.prototype.min = tt;
        e.prototype.max = nt;
        e.prototype.and = st;
        e.prototype.or = ut;
        e.prototype.xor = ft;
        e.prototype.andNot = ct;
        e.prototype.not = ht;
        e.prototype.shiftLeft = pt;
        e.prototype.shiftRight = dt;
        e.prototype.getLowestSetBit = mt;
        e.prototype.bitCount = yt;
        e.prototype.testBit = bt;
        e.prototype.setBit = Et;
        e.prototype.clearBit = St;
        e.prototype.flipBit = xt;
        e.prototype.add = Nt;
        e.prototype.subtract = Ct;
        e.prototype.multiply = kt;
        e.prototype.divide = At;
        e.prototype.remainder = Ot;
        e.prototype.divideAndRemainder = Mt;
        e.prototype.modPow = $t;
        e.prototype.modInverse = Qt;
        e.prototype.pow = Ft;
        e.prototype.gcd = Jt;
        e.prototype.isProbablePrime = Gt;
        e.prototype.square = Lt;
        Zt.prototype.init = en;
        Zt.prototype.next = tn;
        L.prototype.mulTo = _;
        L.prototype.sqrTo = D;
        H.prototype.convert = B;
        H.prototype.revert = j;
        H.prototype.reduce = F;
        H.prototype.mulTo = q;
        H.prototype.sqrTo = I;
        e.prototype.copyTo = u;
        e.prototype.fromInt = a;
        e.prototype.fromString = l;
        e.prototype.clamp = c;
        e.prototype.dlShiftTo = b;
        e.prototype.drShiftTo = w;
        e.prototype.lShiftTo = E;
        e.prototype.rShiftTo = S;
        e.prototype.subTo = x;
        e.prototype.multiplyTo = T;
        e.prototype.squareTo = N;
        e.prototype.divRemTo = C;
        e.prototype.invDigit = P;
        e.prototype.isEven = R;
        e.prototype.exp = U;
        e.prototype.toString = h;
        e.prototype.negate = p;
        e.prototype.abs = d;
        e.prototype.compareTo = m;
        e.prototype.bitLength = y;
        e.prototype.mod = k;
        e.prototype.modPowInt = z;
        e.ZERO = f(0);
        e.ONE = f(1);
        Pt.prototype.convert = Ht;
        Pt.prototype.revert = Ht;
        Pt.prototype.mulTo = Bt;
        Pt.prototype.sqrTo = jt;
        Rt.prototype.convert = Ut;
        Rt.prototype.revert = zt;
        Rt.prototype.reduce = Wt;
        Rt.prototype.mulTo = Vt;
        Rt.prototype.sqrTo = Xt;
        var Ln = '0123456789abcdefghijklmnopqrstuvwxyz', An = new Array(), On, Mn;
        for (On = 48, Mn = 0; 9 >= Mn; ++Mn)
            An[On++] = Mn;
        for (On = 97, Mn = 10; 36 > Mn; ++Mn)
            An[On++] = Mn;
        for (On = 65, Mn = 10; 36 > Mn; ++Mn)
            An[On++] = Mn;
        L.prototype.convert = A, L.prototype.revert = O, L.prototype.reduce = M, L.prototype.mulTo = _, L.prototype.sqrTo = D, H.prototype.convert = B, H.prototype.revert = j, H.prototype.reduce = F, H.prototype.mulTo = q, H.prototype.sqrTo = I, e.prototype.copyTo = u, e.prototype.fromInt = a, e.prototype.fromString = l, e.prototype.clamp = c, e.prototype.dlShiftTo = b, e.prototype.drShiftTo = w, e.prototype.lShiftTo = E, e.prototype.rShiftTo = S, e.prototype.subTo = x, e.prototype.multiplyTo = T, e.prototype.squareTo = N, e.prototype.divRemTo = C, e.prototype.invDigit = P, e.prototype.isEven = R, e.prototype.exp = U, e.prototype.toString = h, e.prototype.negate = p, e.prototype.abs = d, e.prototype.compareTo = m, e.prototype.bitLength = y, e.prototype.mod = k, e.prototype.modPowInt = z, e.ZERO = f(0), e.ONE = f(1), Pt.prototype.convert = Ht, Pt.prototype.revert = Ht, Pt.prototype.mulTo = Bt, Pt.prototype.sqrTo = jt, Rt.prototype.convert = Ut, Rt.prototype.revert = zt, Rt.prototype.reduce = Wt, Rt.prototype.mulTo = Vt, Rt.prototype.sqrTo = Xt;
        var _n = [
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            37,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
            101,
            103,
            107,
            109,
            113,
            127,
            131,
            137,
            139,
            149,
            151,
            157,
            163,
            167,
            173,
            179,
            181,
            191,
            193,
            197,
            199,
            211,
            223,
            227,
            229,
            233,
            239,
            241,
            251,
            257,
            263,
            269,
            271,
            277,
            281,
            283,
            293,
            307,
            311,
            313,
            317,
            331,
            337,
            347,
            349,
            353,
            359,
            367,
            373,
            379,
            383,
            389,
            397,
            401,
            409,
            419,
            421,
            431,
            433,
            439,
            443,
            449,
            457,
            461,
            463,
            467,
            479,
            487,
            491,
            499,
            503,
            509,
            521,
            523,
            541,
            547,
            557,
            563,
            569,
            571,
            577,
            587,
            593,
            599,
            601,
            607,
            613,
            617,
            619,
            631,
            641,
            643,
            647,
            653,
            659,
            661,
            673,
            677,
            683,
            691,
            701,
            709,
            719,
            727,
            733,
            739,
            743,
            751,
            757,
            761,
            769,
            773,
            787,
            797,
            809,
            811,
            821,
            823,
            827,
            829,
            839,
            853,
            857,
            859,
            863,
            877,
            881,
            883,
            887,
            907,
            911,
            919,
            929,
            937,
            941,
            947,
            953,
            967,
            971,
            977,
            983,
            991,
            997
        ], Dn = 67108864 / _n[_n.length - 1];
        e.prototype.chunkSize = J, e.prototype.toRadix = Q, e.prototype.fromRadix = G, e.prototype.fromNumber = Y, e.prototype.bitwiseTo = rt, e.prototype.changeBit = wt, e.prototype.addTo = Tt, e.prototype.dMultiply = _t, e.prototype.dAddOffset = Dt, e.prototype.multiplyLowerTo = It, e.prototype.multiplyUpperTo = qt, e.prototype.modInt = Kt, e.prototype.millerRabin = Yt, e.prototype.clone = W, e.prototype.intValue = X, e.prototype.byteValue = V, e.prototype.shortValue = $, e.prototype.signum = K, e.prototype.toByteArray = Z, e.prototype.equals = et, e.prototype.min = tt, e.prototype.max = nt, e.prototype.and = st, e.prototype.or = ut, e.prototype.xor = ft, e.prototype.andNot = ct, e.prototype.not = ht, e.prototype.shiftLeft = pt, e.prototype.shiftRight = dt, e.prototype.getLowestSetBit = mt, e.prototype.bitCount = yt, e.prototype.testBit = bt, e.prototype.setBit = Et, e.prototype.clearBit = St, e.prototype.flipBit = xt, e.prototype.add = Nt, e.prototype.subtract = Ct, e.prototype.multiply = kt, e.prototype.divide = At, e.prototype.remainder = Ot, e.prototype.divideAndRemainder = Mt, e.prototype.modPow = $t, e.prototype.modInverse = Qt, e.prototype.pow = Ft, e.prototype.gcd = Jt, e.prototype.isProbablePrime = Gt, e.prototype.square = Lt, Zt.prototype.init = en, Zt.prototype.next = tn;
        var Pn = 256, Hn, Bn, jn;
        if (null == Bn) {
            Bn = new Array();
            jn = 0;
            var Fn;
            if (window.crypto && window.crypto.getRandomValues) {
                var In = new Uint32Array(256);
                for (window.crypto.getRandomValues(In), Fn = 0; Fn < In.length; ++Fn)
                    Bn[jn++] = 255 & In[Fn];
            }
            if (window.addEventListener) {
                window.addEventListener('mousemove', qn);
            } else {
                window.attachEvent && window.attachEvent('onmousemove', qn);
            }
            window.addEventListener ? window.addEventListener('mousemove', qn) : window.attachEvent && window.attachEvent('onmousemove', qn);
        }
        on.prototype.nextBytes = sn, cn.prototype.doPublic = pn, cn.prototype.setPublic = hn, cn.prototype.encrypt = dn, cn.prototype.doPrivate = bn, cn.prototype.setPrivate = mn, cn.prototype.setPrivateEx = gn, cn.prototype.generate = yn, cn.prototype.decrypt = wn, function () {
            var n = function (n, r, i) {
                var s = new on(), o = n >> 1;
                this.e = parseInt(r, 16);
                var u = new e(r, 16), a = this, f = function () {
                    var r = function () {
                        if (a.p.compareTo(a.q) <= 0) {
                            var t = a.p;
                            a.p = a.q;
                            a.q = t;
                        }
                        var n = a.p.subtract(e.ONE), r = a.q.subtract(e.ONE), s = n.multiply(r);
                        if (0 == s.gcd(u).compareTo(e.ONE)) {
                            a.n = a.p.multiply(a.q), a.d = u.modInverse(s), a.dmp1 = a.d.mod(n), a.dmq1 = a.d.mod(r), a.coeff = a.q.modInverse(a.p), setTimeout(function () {
                                i();
                            }, 0);
                        } else {
                            setTimeout(f, 0);
                        }
                    }, l = function () {
                        a.q = t();
                        a.q.fromNumberAsync(o, 1, s, function () {
                            a.q.subtract(e.ONE).gcda(u, function (t) {
                                if (0 == t.compareTo(e.ONE) && a.q.isProbablePrime(10)) {
                                    setTimeout(r, 0);
                                } else {
                                    setTimeout(l, 0);
                                }
                            });
                        });
                    }, c = function () {
                        a.p = t();
                        a.p.fromNumberAsync(n - o, 1, s, function () {
                            a.p.subtract(e.ONE).gcda(u, function (t) {
                                if (0 == t.compareTo(e.ONE) && a.p.isProbablePrime(10)) {
                                    setTimeout(l, 0);
                                } else {
                                    setTimeout(c, 0);
                                }
                            });
                        });
                    };
                    setTimeout(c, 0);
                };
                setTimeout(f, 0);
            };
            cn.prototype.generateAsync = n;
            var r = function (e, t) {
                var n = this.s < 0 ? this.negate() : this.clone(), r = e.s < 0 ? e.negate() : e.clone();
                if (n.compareTo(r) < 0) {
                    var i = n;
                    n = r;
                    r = i;
                }
                var s = n.getLowestSetBit(), o = r.getLowestSetBit();
                if (0 > o)
                    return void t(n);
                o > s && (o = s);
                o > 0 && (n.rShiftTo(o, n), r.rShiftTo(o, r));
                var u = function () {
                    (s = n.getLowestSetBit()) > 0 && n.rShiftTo(s, n);
                    (s = r.getLowestSetBit()) > 0 && r.rShiftTo(s, r);
                    n.compareTo(r) >= 0 ? (n.subTo(r, n), n.rShiftTo(1, n)) : (r.subTo(n, r), r.rShiftTo(1, r));
                    n.signum() > 0 ? setTimeout(u, 0) : (o > 0 && r.lShiftTo(o, r), setTimeout(function () {
                        t(r);
                    }, 0));
                };
                setTimeout(u, 10);
            };
            e.prototype.gcda = r;
            var i = function (t, n, r, i) {
                if ('number' == typeof n)
                    if (2 > t)
                        this.fromInt(1);
                    else {
                        this.fromNumber(t, r);
                        this.testBit(t - 1) || this.bitwiseTo(e.ONE.shiftLeft(t - 1), ot, this);
                        this.isEven() && this.dAddOffset(1, 0);
                        var s = this, o = function () {
                            s.dAddOffset(2, 0);
                            s.bitLength() > t && s.subTo(e.ONE.shiftLeft(t - 1), s);
                            s.isProbablePrime(n) ? setTimeout(function () {
                                i();
                            }, 0) : setTimeout(o, 0);
                        };
                        setTimeout(o, 0);
                    }
                else {
                    var u = new Array(), a = 7 & t;
                    u.length = (t >> 3) + 1;
                    n.nextBytes(u);
                    a > 0 ? u[0] &= (1 << a) - 1 : u[0] = 0;
                    this.fromString(u, 256);
                }
            };
            e.prototype.fromNumberAsync = i;
        }();
        var Rn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', Un = '=', zn = zn || {};
        zn.env = zn.env || {};
        var Wn = zn, Xn = Object.prototype, Vn = '[object Function]', $n = [
            'toString',
            'valueOf'
        ];
        zn.env.parseUA = function (e) {
            var t, n = function (e) {
                var t = 0;
                return parseFloat(e.replace(/\./g, function () {
                    return 1 == t++ ? '' : '.';
                }));
            }, r = navigator, i = {
                ie: 0,
                opera: 0,
                gecko: 0,
                webkit: 0,
                chrome: 0,
                mobile: null,
                air: 0,
                ipad: 0,
                iphone: 0,
                ipod: 0,
                ios: null,
                android: 0,
                webos: 0,
                caja: r && r.cajaVersion,
                secure: false,
                os: null
            }, s = e || navigator && navigator.userAgent, o = window && window.location, u = o && o.href;
            return i.secure = u && 0 === u.toLowerCase().indexOf('https'), s && (/windows|win32/i.test(s) ? i.os = 'windows' : /macintosh/i.test(s) ? i.os = 'macintosh' : /rhino/i.test(s) && (i.os = 'rhino'), /KHTML/.test(s) && (i.webkit = 1), t = s.match(/AppleWebKit\/([^\s]*)/), t && t[1] && (i.webkit = n(t[1]), / Mobile\//.test(s) ? (i.mobile = 'Apple', t = s.match(/OS ([^\s]*)/), t && t[1] && (t = n(t[1].replace('_', '.'))), i.ios = t, i.ipad = i.ipod = i.iphone = 0, t = s.match(/iPad|iPod|iPhone/), t && t[0] && (i[t[0].toLowerCase()] = i.ios)) : (t = s.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), t && (i.mobile = t[0]), /webOS/.test(s) && (i.mobile = 'WebOS', t = s.match(/webOS\/([^\s]*);/), t && t[1] && (i.webos = n(t[1]))), / Android/.test(s) && (i.mobile = 'Android', t = s.match(/Android ([^\s]*);/), t && t[1] && (i.android = n(t[1])))), t = s.match(/Chrome\/([^\s]*)/), t && t[1] ? i.chrome = n(t[1]) : (t = s.match(/AdobeAIR\/([^\s]*)/), t && (i.air = t[0]))), i.webkit || (t = s.match(/Opera[\s\/]([^\s]*)/), t && t[1] ? (i.opera = n(t[1]), t = s.match(/Version\/([^\s]*)/), t && t[1] && (i.opera = n(t[1])), t = s.match(/Opera Mini[^;]*/), t && (i.mobile = t[0])) : (t = s.match(/MSIE\s([^;]*)/), t && t[1] ? i.ie = n(t[1]) : (t = s.match(/Gecko\/([^\s]*)/), t && (i.gecko = 1, t = s.match(/rv:([^\s\)]*)/), t && t[1] && (i.gecko = n(t[1]))))))), i;
        }, zn.env.ua = zn.env.parseUA(), zn.isFunction = function (e) {
            return 'function' == typeof e || Xn.toString.apply(e) === Vn;
        }, zn._IEEnumFix = zn.env.ua.ie ? function (e, t) {
            var n, r, i;
            for (n = 0; n < $n.length; n += 1)
                r = $n[n], i = t[r], Wn.isFunction(i) && i != Xn[r] && (e[r] = i);
        } : function () {
        }, zn.extend = function (e, t, n) {
            if (!t || !e)
                throw new Error('extend failed, please check that all dependencies are included.');
            var r, i = function () {
            };
            if (i.prototype = t.prototype, e.prototype = new i(), e.prototype.constructor = e, e.superclass = t.prototype, t.prototype.constructor == Xn.constructor && (t.prototype.constructor = t), n) {
                for (r in n)
                    Wn.hasOwnProperty(n, r) && (e.prototype[r] = n[r]);
                Wn._IEEnumFix(e.prototype, n);
            }
        }, 'undefined' != typeof KJUR && KJUR || (KJUR = {}), 'undefined' != typeof KJUR.asn1 && KJUR.asn1 || (KJUR.asn1 = {}), KJUR.asn1.ASN1Util = new function () {
            this.integerToByteHex = function (e) {
                var t = e.toString(16);
                return t.length % 2 == 1 && (t = '0' + t), t;
            };
            this.bigIntToMinTwosComplementsHex = function (t) {
                var n = t.toString(16);
                if ('-' != n.substr(0, 1))
                    n.length % 2 == 1 ? n = '0' + n : n.match(/^[0-7]/) || (n = '00' + n);
                else {
                    var r = n.substr(1), i = r.length;
                    if (i % 2 == 1) {
                        i += 1;
                    } else {
                        n.match(/^[0-7]/) || (i += 2);
                    }
                    for (var s = '', o = 0; i > o; o++)
                        s += 'f';
                    var u = new e(s, 16), a = u.xor(t).add(e.ONE);
                    n = a.toString(16).replace(/^-/, '');
                }
                return n;
            };
            this.getPEMStringFromHex = function (e, t) {
                var n = CryptoJS.enc.Hex.parse(e), r = CryptoJS.enc.Base64.stringify(n), i = r.replace(/(.{64})/g, '$1\r\n');
                return i = i.replace(/\r\n$/, ''), '-----BEGIN ' + t + '-----\r\n' + i + '\r\n-----END ' + t + '-----\r\n';
            };
        }(), KJUR.asn1.ASN1Object = function () {
            var e = '';
            this.getLengthHexFromValue = function () {
                if ('undefined' == typeof this.hV || null == this.hV)
                    throw 'this.hV is null or undefined.';
                if (this.hV.length % 2 == 1)
                    throw 'value hex must be even length: n=' + e.length + ',v=' + this.hV;
                var t = this.hV.length / 2, n = t.toString(16);
                if (n.length % 2 == 1 && (n = '0' + n), 128 > t)
                    return n;
                var r = n.length / 2;
                if (r > 15)
                    throw 'ASN.1 length too long to represent by 8x: n = ' + t.toString(16);
                var i = 128 + r;
                return i.toString(16) + n;
            };
            this.getEncodedHex = function () {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = false), this.hTLV;
            };
            this.getValueHex = function () {
                return this.getEncodedHex(), this.hV;
            };
            this.getFreshValueHex = function () {
                return '';
            };
        }, KJUR.asn1.DERAbstractString = function (e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.getString = function () {
                return this.s;
            };
            this.setString = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = e;
                this.hV = stohex(this.s);
            };
            this.setStringHex = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = e;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex && this.setStringHex(e.hex));
        }, zn.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractTime = function () {
            KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
            this.localDateToUTC = function (e) {
                utc = e.getTime() + 60000 * e.getTimezoneOffset();
                var t = new Date(utc);
                return t;
            };
            this.formatDate = function (e, t) {
                var n = this.zeroPadding, r = this.localDateToUTC(e), i = String(r.getFullYear());
                'utc' == t && (i = i.substr(2, 2));
                var s = n(String(r.getMonth() + 1), 2), o = n(String(r.getDate()), 2), u = n(String(r.getHours()), 2), a = n(String(r.getMinutes()), 2), f = n(String(r.getSeconds()), 2);
                return i + s + o + u + a + f + 'Z';
            };
            this.zeroPadding = function (e, t) {
                return e.length >= t ? e : new Array(t - e.length + 1).join('0') + e;
            };
            this.getString = function () {
                return this.s;
            };
            this.setString = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = e;
                this.hV = stohex(this.s);
            };
            this.setByDateValue = function (e, t, n, r, i, s) {
                var o = new Date(Date.UTC(e, t - 1, n, r, i, s, 0));
                this.setByDate(o);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
        }, zn.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object), KJUR.asn1.DERAbstractStructured = function (e) {
            KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
            this.setByASN1ObjectArray = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.asn1Array = e;
            };
            this.appendASN1Object = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.asn1Array.push(e);
            };
            this.asn1Array = new Array();
            'undefined' != typeof e && 'undefined' != typeof e.array && (this.asn1Array = e.array);
        }, zn.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object), KJUR.asn1.DERBoolean = function () {
            KJUR.asn1.DERBoolean.superclass.constructor.call(this);
            this.hT = '01';
            this.hTLV = '0101ff';
        }, zn.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object), KJUR.asn1.DERInteger = function (t) {
            KJUR.asn1.DERInteger.superclass.constructor.call(this);
            this.hT = '02';
            this.setByBigInteger = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(e);
            };
            this.setByInteger = function (t) {
                var n = new e(String(t), 10);
                this.setByBigInteger(n);
            };
            this.setValueHex = function (e) {
                this.hV = e;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof t && ('undefined' != typeof t.bigint ? this.setByBigInteger(t.bigint) : 'undefined' != typeof t.int ? this.setByInteger(t.int) : 'undefined' != typeof t.hex && this.setValueHex(t.hex));
        }, zn.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object), KJUR.asn1.DERBitString = function (e) {
            KJUR.asn1.DERBitString.superclass.constructor.call(this);
            this.hT = '03';
            this.setHexValueIncludingUnusedBits = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.hV = e;
            };
            this.setUnusedBitsAndHexValue = function (e, t) {
                if (0 > e || e > 7)
                    throw 'unused bits shall be from 0 to 7: u = ' + e;
                var n = '0' + e;
                this.hTLV = null;
                this.isModified = true;
                this.hV = n + t;
            };
            this.setByBinaryString = function (e) {
                e = e.replace(/0+$/, '');
                var t = 8 - e.length % 8;
                8 == t && (t = 0);
                for (var n = 0; t >= n; n++)
                    e += '0';
                for (var r = '', n = 0; n < e.length - 1; n += 8) {
                    var i = e.substr(n, 8), s = parseInt(i, 2).toString(16);
                    1 == s.length && (s = '0' + s);
                    r += s;
                }
                this.hTLV = null;
                this.isModified = true;
                this.hV = '0' + t + r;
            };
            this.setByBooleanArray = function (e) {
                for (var t = '', n = 0; n < e.length; n++)
                    t += 1 == e[n] ? '1' : '0';
                this.setByBinaryString(t);
            };
            this.newFalseArray = function (e) {
                for (var t = new Array(e), n = 0; e > n; n++)
                    t[n] = false;
                return t;
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.hex ? this.setHexValueIncludingUnusedBits(e.hex) : 'undefined' != typeof e.bin ? this.setByBinaryString(e.bin) : 'undefined' != typeof e.array && this.setByBooleanArray(e.array));
        }, zn.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object), KJUR.asn1.DEROctetString = function (e) {
            KJUR.asn1.DEROctetString.superclass.constructor.call(this, e);
            this.hT = '04';
        }, zn.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNull = function () {
            KJUR.asn1.DERNull.superclass.constructor.call(this);
            this.hT = '05';
            this.hTLV = '0500';
        }, zn.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object), KJUR.asn1.DERObjectIdentifier = function (t) {
            var n = function (e) {
                var t = e.toString(16);
                return 1 == t.length && (t = '0' + t), t;
            }, r = function (t) {
                var r = '', i = new e(t, 10), s = i.toString(2), o = 7 - s.length % 7;
                7 == o && (o = 0);
                for (var u = '', a = 0; o > a; a++)
                    u += '0';
                s = u + s;
                for (var a = 0; a < s.length - 1; a += 7) {
                    var f = s.substr(a, 7);
                    a != s.length - 7 && (f = '1' + f);
                    r += n(parseInt(f, 2));
                }
                return r;
            };
            KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
            this.hT = '06';
            this.setValueHex = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = e;
            };
            this.setValueOidString = function (e) {
                if (!e.match(/^[0-9.]+$/))
                    throw 'malformed oid string: ' + e;
                var t = '', i = e.split('.'), s = 40 * parseInt(i[0]) + parseInt(i[1]);
                t += n(s);
                i.splice(0, 2);
                this.hTLV = null;
                this.isModified = true;
                this.s = null;
                this.hV = t;
                this.hTLV = null, this.isModified = true, this.s = null, this.hV = t;
            };
            this.setValueName = function (e) {
                if ('undefined' == typeof KJUR.asn1.x509.OID.name2oidList[e])
                    throw 'DERObjectIdentifier oidName undefined: ' + e;
                var t = KJUR.asn1.x509.OID.name2oidList[e];
                this.setValueOidString(t);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof t && ('undefined' != typeof t.oid ? this.setValueOidString(t.oid) : 'undefined' != typeof t.hex ? this.setValueHex(t.hex) : 'undefined' != typeof t.name && this.setValueName(t.name));
        }, zn.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object), KJUR.asn1.DERUTF8String = function (e) {
            KJUR.asn1.DERUTF8String.superclass.constructor.call(this, e);
            this.hT = '0c';
        }, zn.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERNumericString = function (e) {
            KJUR.asn1.DERNumericString.superclass.constructor.call(this, e);
            this.hT = '12';
        }, zn.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERPrintableString = function (e) {
            KJUR.asn1.DERPrintableString.superclass.constructor.call(this, e);
            this.hT = '13';
        }, zn.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERTeletexString = function (e) {
            KJUR.asn1.DERTeletexString.superclass.constructor.call(this, e);
            this.hT = '14';
        }, zn.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString), KJUR.asn1.DERIA5String = function (e) {
            KJUR.asn1.DERIA5String.superclass.constructor.call(this, e);
            this.hT = '16';
        }, zn.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString), KJUR.asn1.DERUTCTime = function (e) {
            KJUR.asn1.DERUTCTime.superclass.constructor.call(this, e);
            this.hT = '17';
            this.setByDate = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.date = e;
                this.s = this.formatDate(this.date, 'utc');
                this.hV = stohex(this.s);
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex ? this.setStringHex(e.hex) : 'undefined' != typeof e.date && this.setByDate(e.date));
        }, zn.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERGeneralizedTime = function (e) {
            KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, e);
            this.hT = '18';
            this.setByDate = function (e) {
                this.hTLV = null;
                this.isModified = true;
                this.date = e;
                this.s = this.formatDate(this.date, 'gen');
                this.hV = stohex(this.s);
            };
            'undefined' != typeof e && ('undefined' != typeof e.str ? this.setString(e.str) : 'undefined' != typeof e.hex ? this.setStringHex(e.hex) : 'undefined' != typeof e.date && this.setByDate(e.date));
        }, zn.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime), KJUR.asn1.DERSequence = function (e) {
            KJUR.asn1.DERSequence.superclass.constructor.call(this, e);
            this.hT = '30';
            this.getFreshValueHex = function () {
                for (var e = '', t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e += n.getEncodedHex();
                }
                return this.hV = e, this.hV;
            };
        }, zn.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERSet = function (e) {
            KJUR.asn1.DERSet.superclass.constructor.call(this, e);
            this.hT = '31';
            this.getFreshValueHex = function () {
                for (var e = new Array(), t = 0; t < this.asn1Array.length; t++) {
                    var n = this.asn1Array[t];
                    e.push(n.getEncodedHex());
                }
                return e.sort(), this.hV = e.join(''), this.hV;
            };
        }, zn.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured), KJUR.asn1.DERTaggedObject = function (e) {
            KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
            this.hT = 'a0';
            this.hV = '';
            this.isExplicit = true;
            this.asn1Object = null;
            this.setASN1Object = function (e, t, n) {
                this.hT = t;
                this.isExplicit = e;
                this.asn1Object = n;
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = true) : (this.hV = null, this.hTLV = n.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, t), this.isModified = false);
            };
            this.getFreshValueHex = function () {
                return this.hV;
            };
            'undefined' != typeof e && ('undefined' != typeof e.tag && (this.hT = e.tag), 'undefined' != typeof e.explicit && (this.isExplicit = e.explicit), 'undefined' != typeof e.obj && (this.asn1Object = e.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)));
        }, zn.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object), function (e) {
            var t, n = {};
            n.decode = function (n) {
                var r;
                if (t === e) {
                    var i = '0123456789ABCDEF', s = ' \f\n\r\t\xA0\u2028\u2029';
                    for (t = [], r = 0; 16 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (i = i.toLowerCase(), r = 10; 16 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (r = 0; r < s.length; ++r)
                        t[s.charAt(r)] = -1;
                }
                var o = [], u = 0, a = 0;
                for (r = 0; r < n.length; ++r) {
                    var f = n.charAt(r);
                    if ('=' == f)
                        break;
                    if (f = t[f], -1 != f) {
                        if (f === e)
                            throw 'Illegal character at offset ' + r;
                        u |= f;
                        ++a >= 2 ? (o[o.length] = u, u = 0, a = 0) : u <<= 4;
                    }
                }
                if (a)
                    throw 'Hex encoding incomplete: 4 bits missing';
                return o;
            };
            window.Hex = n;
        }(), function (e) {
            var t, n = {};
            n.decode = function (n) {
                var r;
                if (t === e) {
                    var i = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', s = '= \f\n\r\t\xA0\u2028\u2029';
                    for (t = [], r = 0; 64 > r; ++r)
                        t[i.charAt(r)] = r;
                    for (r = 0; r < s.length; ++r)
                        t[s.charAt(r)] = -1;
                }
                var o = [], u = 0, a = 0;
                for (r = 0; r < n.length; ++r) {
                    var f = n.charAt(r);
                    if ('=' == f)
                        break;
                    if (f = t[f], -1 != f) {
                        if (f === e)
                            throw 'Illegal character at offset ' + r;
                        u |= f;
                        ++a >= 4 ? (o[o.length] = u >> 16, o[o.length] = u >> 8 & 255, o[o.length] = 255 & u, u = 0, a = 0) : u <<= 6;
                    }
                }
                switch (a) {
                    case 1:
                        throw 'Base64 encoding incomplete: at least 2 bits missing';
                    case 2:
                        o[o.length] = u >> 10;
                        break;
                    case 3:
                        o[o.length] = u >> 16, o[o.length] = u >> 8 & 255;
                }
                return o;
            };
            n.re = /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/;
            n.unarmor = function (e) {
                var t = n.re.exec(e);
                if (t)
                    if (t[1])
                        e = t[1];
                    else {
                        if (!t[2])
                            throw 'RegExp out of sync';
                        e = t[2];
                    }
                return n.decode(e);
            };
            window.Base64 = n;
        }(), function (e) {
            function t(e, n) {
                if (e instanceof t) {
                    this.enc = e.enc, this.pos = e.pos;
                } else {
                    this.enc = e, this.pos = n;
                }
            }
            function n(e, t, n, r, i) {
                this.stream = e;
                this.header = t;
                this.length = n;
                this.tag = r;
                this.sub = i;
            }
            var r = 100, i = '\u2026', s = {
                tag: function (e, t) {
                    var n = document.createElement(e);
                    return n.className = t, n;
                },
                text: function (e) {
                    return document.createTextNode(e);
                }
            };
            t.prototype.get = function (t) {
                if (t === e && (t = this.pos++), t >= this.enc.length)
                    throw 'Requesting byte offset ' + t + ' on a stream of length ' + this.enc.length;
                return this.enc[t];
            };
            t.prototype.hexDigits = '0123456789ABCDEF';
            t.prototype.hexByte = function (e) {
                return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(15 & e);
            };
            t.prototype.hexDump = function (e, t, n) {
                for (var r = '', i = e; t > i; ++i)
                    if (r += this.hexByte(this.get(i)), n !== true)
                        switch (15 & i) {
                            case 7:
                                r += '  ';
                                break;
                            case 15:
                                r += '\n';
                                break;
                            default:
                                r += ' ';
                        }
                return r;
            };
            t.prototype.parseStringISO = function (e, t) {
                for (var n = '', r = e; t > r; ++r)
                    n += String.fromCharCode(this.get(r));
                return n;
            };
            t.prototype.parseStringUTF = function (e, t) {
                for (var n = '', r = e; t > r;) {
                    var i = this.get(r++);
                    n += String.fromCharCode(128 > i ? i : i > 191 && 224 > i ? (31 & i) << 6 | 63 & this.get(r++) : (15 & i) << 12 | (63 & this.get(r++)) << 6 | 63 & this.get(r++));
                }
                return n;
            };
            t.prototype.parseStringBMP = function (e, t) {
                for (var n = '', r = e; t > r; r += 2) {
                    var i = this.get(r), s = this.get(r + 1);
                    n += String.fromCharCode((i << 8) + s);
                }
                return n;
            };
            t.prototype.reTime = /^((?:1[89]|2\d)?\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
            t.prototype.parseTime = function (e, t) {
                var n = this.parseStringISO(e, t), r = this.reTime.exec(n);
                return r ? (n = r[1] + '-' + r[2] + '-' + r[3] + ' ' + r[4], r[5] && (n += ':' + r[5], r[6] && (n += ':' + r[6], r[7] && (n += '.' + r[7]))), r[8] && (n += ' UTC', 'Z' != r[8] && (n += r[8], r[9] && (n += ':' + r[9]))), n) : 'Unrecognized time: ' + n;
            };
            t.prototype.parseInteger = function (e, t) {
                var n = t - e;
                if (n > 4) {
                    n <<= 3;
                    var r = this.get(e);
                    if (0 === r)
                        n -= 8;
                    else
                        for (; 128 > r;)
                            r <<= 1, --n;
                    return '(' + n + ' bit)';
                }
                for (var i = 0, s = e; t > s; ++s)
                    i = i << 8 | this.get(s);
                return i;
            };
            t.prototype.parseBitString = function (e, t) {
                var n = this.get(e), r = (t - e - 1 << 3) - n, i = '(' + r + ' bit)';
                if (20 >= r) {
                    var s = n;
                    i += ' ';
                    for (var o = t - 1; o > e; --o) {
                        for (var u = this.get(o), a = s; 8 > a; ++a)
                            i += u >> a & 1 ? '1' : '0';
                        s = 0;
                    }
                }
                return i;
            };
            t.prototype.parseOctetString = function (e, t) {
                var n = t - e, s = '(' + n + ' byte) ';
                n > r && (t = e + r);
                for (var o = e; t > o; ++o)
                    s += this.hexByte(this.get(o));
                return n > r && (s += i), s;
            };
            t.prototype.parseOID = function (e, t) {
                for (var n = '', r = 0, i = 0, s = e; t > s; ++s) {
                    var o = this.get(s);
                    if (r = r << 7 | 127 & o, i += 7, !(128 & o)) {
                        if ('' === n) {
                            var u = 80 > r ? 40 > r ? 0 : 1 : 2;
                            n = u + '.' + (r - 40 * u);
                        } else
                            n += '.' + (i >= 31 ? 'bigint' : r);
                        r = i = 0;
                    }
                }
                return n;
            };
            n.prototype.typeName = function () {
                if (this.tag === e)
                    return 'unknown';
                var t = this.tag >> 6, n = (this.tag >> 5 & 1, 31 & this.tag);
                switch (t) {
                    case 0:
                        switch (n) {
                            case 0:
                                return 'EOC';
                            case 1:
                                return 'BOOLEAN';
                            case 2:
                                return 'INTEGER';
                            case 3:
                                return 'BIT_STRING';
                            case 4:
                                return 'OCTET_STRING';
                            case 5:
                                return 'NULL';
                            case 6:
                                return 'OBJECT_IDENTIFIER';
                            case 7:
                                return 'ObjectDescriptor';
                            case 8:
                                return 'EXTERNAL';
                            case 9:
                                return 'REAL';
                            case 10:
                                return 'ENUMERATED';
                            case 11:
                                return 'EMBEDDED_PDV';
                            case 12:
                                return 'UTF8String';
                            case 16:
                                return 'SEQUENCE';
                            case 17:
                                return 'SET';
                            case 18:
                                return 'NumericString';
                            case 19:
                                return 'PrintableString';
                            case 20:
                                return 'TeletexString';
                            case 21:
                                return 'VideotexString';
                            case 22:
                                return 'IA5String';
                            case 23:
                                return 'UTCTime';
                            case 24:
                                return 'GeneralizedTime';
                            case 25:
                                return 'GraphicString';
                            case 26:
                                return 'VisibleString';
                            case 27:
                                return 'GeneralString';
                            case 28:
                                return 'UniversalString';
                            case 30:
                                return 'BMPString';
                            default:
                                return 'Universal_' + n.toString(16);
                        }
                        ;
                    case 1:
                        return 'Application_' + n.toString(16);
                    case 2:
                        return '[' + n + ']';
                    case 3:
                        return 'Private_' + n.toString(16);
                }
            };
            n.prototype.reSeemsASCII = /^[ -~]+$/;
            n.prototype.content = function () {
                if (this.tag === e)
                    return null;
                var t = this.tag >> 6, n = 31 & this.tag, s = this.posContent(), o = Math.abs(this.length);
                if (0 !== t) {
                    if (null !== this.sub)
                        return '(' + this.sub.length + ' elem)';
                    var u = this.stream.parseStringISO(s, s + Math.min(o, r));
                    return this.reSeemsASCII.test(u) ? u.substring(0, 2 * r) + (u.length > 2 * r ? i : '') : this.stream.parseOctetString(s, s + o);
                }
                switch (n) {
                    case 1:
                        return 0 === this.stream.get(s) ? 'false' : 'true';
                    case 2:
                        return this.stream.parseInteger(s, s + o);
                    case 3:
                        return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseBitString(s, s + o);
                    case 4:
                        return this.sub ? '(' + this.sub.length + ' elem)' : this.stream.parseOctetString(s, s + o);
                    case 6:
                        return this.stream.parseOID(s, s + o);
                    case 16:
                    case 17:
                        return '(' + this.sub.length + ' elem)';
                    case 12:
                        return this.stream.parseStringUTF(s, s + o);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return this.stream.parseStringISO(s, s + o);
                    case 30:
                        return this.stream.parseStringBMP(s, s + o);
                    case 23:
                    case 24:
                        return this.stream.parseTime(s, s + o);
                }
                return null;
            };
            n.prototype.toString = function () {
                return this.typeName() + '@' + this.stream.pos + '[header:' + this.header + ',length:' + this.length + ',sub:' + (null === this.sub ? 'null' : this.sub.length) + ']';
            };
            n.prototype.print = function (t) {
                if (t === e && (t = ''), document.writeln(t + this), null !== this.sub) {
                    t += '  ';
                    for (var n = 0, r = this.sub.length; r > n; ++n)
                        this.sub[n].print(t);
                }
            };
            n.prototype.toPrettyString = function (t) {
                t === e && (t = '');
                var n = t + this.typeName() + ' @' + this.stream.pos;
                if (this.length >= 0 && (n += '+'), n += this.length, 32 & this.tag ? n += ' (constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (n += ' (encapsulates)'), n += '\n', null !== this.sub) {
                    t += '  ';
                    for (var r = 0, i = this.sub.length; i > r; ++r)
                        n += this.sub[r].toPrettyString(t);
                }
                return n;
            };
            n.prototype.toDOM = function () {
                var e = s.tag('div', 'node');
                e.asn1 = this;
                var t = s.tag('div', 'head'), n = this.typeName().replace(/_/g, ' ');
                t.innerHTML = n;
                var r = this.content();
                if (null !== r) {
                    r = String(r).replace(/</g, '&lt;');
                    var i = s.tag('span', 'preview');
                    i.appendChild(s.text(r));
                    t.appendChild(i);
                }
                e.appendChild(t);
                this.node = e;
                this.head = t;
                o.innerHTML = n;
                e.appendChild(o);
                if (n = 'Offset: ' + this.stream.pos + '<br/>', n += 'Length: ' + this.header + '+', n += this.length >= 0 ? this.length : -this.length + ' (undefined)', 32 & this.tag ? n += '<br/>(constructed)' : 3 != this.tag && 4 != this.tag || null === this.sub || (n += '<br/>(encapsulates)'), null !== r && (n += '<br/>Value:<br/><b>' + r + '</b>', 'object' == typeof oids && 6 == this.tag)) {
                    var u = oids[r];
                    u && (u.d && (n += '<br/>' + u.d), u.c && (n += '<br/>' + u.c), u.w && (n += '<br/>(warning!)'));
                }
                o.innerHTML = n, e.appendChild(o);
                var a = s.tag('div', 'sub');
                if (null !== this.sub)
                    for (var f = 0, l = this.sub.length; l > f; ++f)
                        a.appendChild(this.sub[f].toDOM());
                return e.appendChild(a), t.onclick = function () {
                    e.className = 'node collapsed' == e.className ? 'node' : 'node collapsed';
                }, e;
            };
            n.prototype.posStart = function () {
                return this.stream.pos;
            };
            n.prototype.posContent = function () {
                return this.stream.pos + this.header;
            };
            n.prototype.posEnd = function () {
                return this.stream.pos + this.header + Math.abs(this.length);
            };
            n.prototype.fakeHover = function (e) {
                this.node.className += ' hover';
                e && (this.head.className += ' hover');
            };
            n.prototype.fakeOut = function (e) {
                var t = / ?hover/;
                this.node.className = this.node.className.replace(t, '');
                e && (this.head.className = this.head.className.replace(t, ''));
            };
            n.prototype.toHexDOM_sub = function (e, t, n, r, i) {
                if (!(r >= i)) {
                    var o = s.tag('span', t);
                    o.appendChild(s.text(n.hexDump(r, i)));
                    e.appendChild(o);
                }
            };
            n.prototype.toHexDOM = function (t) {
                var n = s.tag('span', 'hex');
                if (t === e && (t = n), this.head.hexNode = n, this.head.onmouseover = function () {
                        this.hexNode.className = 'hexCurrent';
                    }, this.head.onmouseout = function () {
                        this.hexNode.className = 'hex';
                    }, n.asn1 = this, n.onmouseover = function () {
                        var e = !t.selected;
                        e && (t.selected = this.asn1, this.className = 'hexCurrent');
                        this.asn1.fakeHover(e);
                    }, n.onmouseout = function () {
                        var e = t.selected == this.asn1;
                        this.asn1.fakeOut(e);
                        e && (t.selected = null, this.className = 'hex');
                    }, this.toHexDOM_sub(n, 'tag', this.stream, this.posStart(), this.posStart() + 1), this.toHexDOM_sub(n, this.length >= 0 ? 'dlen' : 'ulen', this.stream, this.posStart() + 1, this.posContent()), null === this.sub)
                    n.appendChild(s.text(this.stream.hexDump(this.posContent(), this.posEnd())));
                else if (this.sub.length > 0) {
                    var r = this.sub[0], i = this.sub[this.sub.length - 1];
                    this.toHexDOM_sub(n, 'intro', this.stream, this.posContent(), r.posStart());
                    for (var o = 0, u = this.sub.length; u > o; ++o)
                        n.appendChild(this.sub[o].toHexDOM(t));
                    this.toHexDOM_sub(n, 'outro', this.stream, i.posEnd(), this.posEnd());
                }
                return n;
            };
            n.prototype.toHexString = function () {
                return this.stream.hexDump(this.posStart(), this.posEnd(), true);
            };
            n.decodeLength = function (e) {
                var t = e.get(), n = 127 & t;
                if (n == t)
                    return n;
                if (n > 3)
                    throw 'Length over 24 bits not supported at position ' + (e.pos - 1);
                if (0 === n)
                    return -1;
                t = 0;
                for (var r = 0; n > r; ++r)
                    t = t << 8 | e.get();
                return t;
            };
            n.hasContent = function (e, r, i) {
                if (32 & e)
                    return true;
                if (3 > e || e > 4)
                    return false;
                var s = new t(i);
                3 == e && s.get();
                var o = s.get();
                if (o >> 6 & 1)
                    return false;
                try {
                    var u = n.decodeLength(s);
                    return s.pos - i.pos + u == r;
                } catch (a) {
                    return false;
                }
            };
            n.decode = function (e) {
                e instanceof t || (e = new t(e, 0));
                var r = new t(e), i = e.get(), s = n.decodeLength(e), o = e.pos - r.pos, u = null;
                if (n.hasContent(i, s, e)) {
                    var a = e.pos;
                    if (3 == i && e.get(), u = [], s >= 0) {
                        for (var f = a + s; e.pos < f;)
                            u[u.length] = n.decode(e);
                        if (e.pos != f)
                            throw 'Content size is not correct for container starting at offset ' + a;
                    } else
                        try {
                            for (;;) {
                                var l = n.decode(e);
                                if (0 === l.tag)
                                    break;
                                u[u.length] = l;
                            }
                            s = a - e.pos;
                        } catch (c) {
                            throw 'Exception while decoding undefined length content: ' + c;
                        }
                } else
                    e.pos += s;
                return new n(r, o, s, i, u);
            };
            n.test = function () {
                for (var e = [
                    {
                        value: [39],
                        expected: 39
                    },
                    {
                        value: [
                            129,
                            201
                        ],
                        expected: 201
                    },
                    {
                        value: [
                            131,
                            254,
                            220,
                            186
                        ],
                        expected: 16702650
                    }
                ], r = 0, i = e.length; i > r; ++r) {
                    var s = new t(e[r].value, 0), o = n.decodeLength(s);
                    o != e[r].expected && document.write('In test[' + r + '] expected ' + e[r].expected + ' got ' + o + '\n');
                }
            };
            window.ASN1 = n;
        }(), ASN1.prototype.getHexStringValue = function () {
            var e = this.toHexString(), t = 2 * this.header, n = 2 * this.length;
            return e.substr(t, n);
        }, cn.prototype.parseKey = function (e) {
            try {
                var t = 0, n = 0, r = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/, i = r.test(e) ? Hex.decode(e) : Base64.unarmor(e), s = ASN1.decode(i);
                if (9 === s.sub.length) {
                    t = s.sub[1].getHexStringValue();
                    this.n = un(t, 16);
                    n = s.sub[2].getHexStringValue();
                    this.e = parseInt(n, 16);
                    var o = s.sub[3].getHexStringValue();
                    this.d = un(o, 16);
                    var u = s.sub[4].getHexStringValue();
                    this.p = un(u, 16);
                    var a = s.sub[5].getHexStringValue();
                    this.q = un(a, 16);
                    var f = s.sub[6].getHexStringValue();
                    this.dmp1 = un(f, 16);
                    var l = s.sub[7].getHexStringValue();
                    this.dmq1 = un(l, 16);
                    var c = s.sub[8].getHexStringValue();
                    this.coeff = un(c, 16);
                } else {
                    if (2 !== s.sub.length)
                        return false;
                    var h = s.sub[1], p = h.sub[0];
                    t = p.sub[0].getHexStringValue();
                    this.n = un(t, 16);
                    n = p.sub[1].getHexStringValue();
                    this.e = parseInt(n, 16);
                }
                return true;
            } catch (d) {
                return false;
            }
        }, cn.prototype.getPrivateBaseKey = function () {
            var e = {
                array: [
                    new KJUR.asn1.DERInteger({ 'int': 0 }),
                    new KJUR.asn1.DERInteger({ bigint: this.n }),
                    new KJUR.asn1.DERInteger({ 'int': this.e }),
                    new KJUR.asn1.DERInteger({ bigint: this.d }),
                    new KJUR.asn1.DERInteger({ bigint: this.p }),
                    new KJUR.asn1.DERInteger({ bigint: this.q }),
                    new KJUR.asn1.DERInteger({ bigint: this.dmp1 }),
                    new KJUR.asn1.DERInteger({ bigint: this.dmq1 }),
                    new KJUR.asn1.DERInteger({ bigint: this.coeff })
                ]
            }, t = new KJUR.asn1.DERSequence(e);
            return t.getEncodedHex();
        }, cn.prototype.getPrivateBaseKeyB64 = function () {
            return En(this.getPrivateBaseKey());
        }, cn.prototype.getPublicBaseKey = function () {
            var e = {
                array: [
                    new KJUR.asn1.DERObjectIdentifier({ oid: '1.2.840.113549.1.1.1' }),
                    new KJUR.asn1.DERNull()
                ]
            }, t = new KJUR.asn1.DERSequence(e);
            e = {
                array: [
                    new KJUR.asn1.DERInteger({ bigint: this.n }),
                    new KJUR.asn1.DERInteger({ 'int': this.e })
                ]
            };
            var n = new KJUR.asn1.DERSequence(e);
            e = { hex: '00' + n.getEncodedHex() };
            var r = new KJUR.asn1.DERBitString(e);
            e = {
                array: [
                    t,
                    r
                ]
            };
            var i = new KJUR.asn1.DERSequence(e);
            return i.getEncodedHex();
        }, cn.prototype.getPublicBaseKeyB64 = function () {
            return En(this.getPublicBaseKey());
        }, cn.prototype.wordwrap = function (e, t) {
            if (t = t || 64, !e)
                return e;
            var n = '(.{1,' + t + '})( +|$\n?)|(.{1,' + t + '})';
            return e.match(RegExp(n, 'g')).join('\n');
        }, cn.prototype.getPrivateKey = function () {
            var e = '-----BEGIN RSA PRIVATE KEY-----\n';
            return e += this.wordwrap(this.getPrivateBaseKeyB64()) + '\n', e += '-----END RSA PRIVATE KEY-----';
        }, cn.prototype.getPublicKey = function () {
            var e = '-----BEGIN PUBLIC KEY-----\n';
            return e += this.wordwrap(this.getPublicBaseKeyB64()) + '\n', e += '-----END PUBLIC KEY-----';
        }, cn.prototype.hasPublicKeyProperty = function (e) {
            return e = e || {}, e.hasOwnProperty('n') && e.hasOwnProperty('e');
        }, cn.prototype.hasPrivateKeyProperty = function (e) {
            return e = e || {}, e.hasOwnProperty('n') && e.hasOwnProperty('e') && e.hasOwnProperty('d') && e.hasOwnProperty('p') && e.hasOwnProperty('q') && e.hasOwnProperty('dmp1') && e.hasOwnProperty('dmq1') && e.hasOwnProperty('coeff');
        }, cn.prototype.parsePropertiesFrom = function (e) {
            this.n = e.n;
            this.e = e.e;
            e.hasOwnProperty('d') && (this.d = e.d, this.p = e.p, this.q = e.q, this.dmp1 = e.dmp1, this.dmq1 = e.dmq1, this.coeff = e.coeff);
        };
        var Jn = function (e) {
            cn.call(this);
            e && ('string' == typeof e ? this.parseKey(e) : (this.hasPrivateKeyProperty(e) || this.hasPublicKeyProperty(e)) && this.parsePropertiesFrom(e));
        };
        Jn.prototype = new cn(), Jn.prototype.constructor = Jn;
        var Kn = function (e) {
            e = e || {};
            this.default_key_size = parseInt(e.default_key_size) || 1024;
            this.default_public_exponent = e.default_public_exponent || '010001';
            this.log = e.log || false;
            this.key = null;
        };
        return Kn.prototype.setKey = function (e) {
            this.log && this.key && console.warn('A key was already set, overriding existing.');
            this.key = new Jn(e);
        }, Kn.prototype.setPrivateKey = function (e) {
            this.setKey(e);
        }, Kn.prototype.setPublicKey = function (e) {
            this.setKey(e);
        }, Kn.prototype.decrypt = function (e) {
            try {
                return this.getKey().decrypt(Sn(e));
            } catch (t) {
                return false;
            }
        }, Kn.prototype.encrypt = function (e) {
            try {
                return En(this.getKey().encrypt(e));
            } catch (t) {
                return false;
            }
        }, Kn.prototype.getKey = function (e) {
            if (!this.key) {
                if (this.key = new Jn(), e && '[object Function]' === {}.toString.call(e))
                    return void this.key.generateAsync(this.default_key_size, this.default_public_exponent, e);
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        }, Kn.prototype.getPrivateKey = function () {
            return this.getKey().getPrivateKey();
        }, Kn.prototype.getPrivateKeyB64 = function () {
            return this.getKey().getPrivateBaseKeyB64();
        }, Kn.prototype.getPublicKey = function () {
            return this.getKey().getPublicKey();
        }, Kn.prototype.getPublicKeyB64 = function () {
            return this.getKey().getPublicBaseKeyB64();
        }, Kn;
    }(), t = e;
    if (typeof module != 'undefined' && typeof exports == 'object' && define.cmd) {
        module.exports = t;
    } else {
        typeof define == 'function' && define.amd ? define('com.csair.mbp/jsencrypt.min', [], function () {
            return t;
        }) : this.moduleName = t;
    }
}.call(function () {
    return this || (typeof window != 'undefined' ? window : global);
}));
define('com.csair.mbp/safekeyboard', [
    'zepto',
    'underscore',
    'cube/cube',
    'backbone',
    '../com.csair.mbp/jsencrypt.min',
    'i18n!com.csair.mbp.login/nls/locale'
], function (t, n, r, i, s, o) {
    var u = '/safekeyboard', a = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9R1dupKOK+mq51X4ol3GULCrFM7hJPRh+wmH+6s+Fx16x7IPzjsjwnHrr1cR4lcG43Zox0kLrK+q0LZ4Cu1eTH2h+n3JQUtXFGh+T7ITQYFYCHPtSlB+I1tzm5W1MLG6xPilFVDDAPg67eAulMFZBuMnpR+870rxeqtriXWUkCQIDAQAB', f;
    return document.oncontextmenu = function () {
        return false;
    }, window.onselectstart = function () {
        return false;
    }, window.oncopy = function () {
        return false;
    }, t(document).bind('pagebeforechange', function (e, t) {
        e.preventDefault();
    }), t.mobile = {}, t.mobile.loadingMessage = false, t.mobile.ignoreContentEnabled = true, t(function () {
        e.attach(document.body);
    }), {
        showKeyboard: function () {
            t('#keyboard_mask').css({
                display: 'block',
                height: t(window).height()
            });
            t('#keyboard_val').css('width', t('#keyboard_content').width() - 8);
            t('#keyboard_content').css({
                left: e,
                top: n
            });
            t('#keyboard_content').css('display', 'block');
            t('#keyboard_content').css({
                left: e,
                top: n
            }), t('#keyboard_content').css('display', 'block');
        },
        shift: function (e) {
            if (e) {
                t('#keyboard_lower_letters').hide(), t('#keyboard_upper_letters').show();
            } else {
                t('#keyboard_upper_letters').hide(), t('#keyboard_lower_letters').show();
            }
        },
        getKeyVal: function (e) {
            t('#keyboard_val').val(t('#keyboard_val').val() + '*');
            var n = t('#keyboard_seq').val();
            t('#keyboard_seq').val(n + (n ? ',' : '') + t(e).attr('data'));
        },
        delKeyVal: function () {
            var e = t('#keyboard_val').val();
            t('#keyboard_val').val(e.substr(0, e.length - 1));
            var n = t('#keyboard_seq').val();
            t('#keyboard_seq').val(n.substr(0, n.lastIndexOf(',')));
        },
        submitKeyboard: function () {
            if (!t('#keyboard_val').val()) {
                t('#keyboard_mask').css('display', 'none');
                t('#keyboard_content').css('display', 'none');
                return;
            }
            if (t('#keyboard_val').val().length > 20) {
                new r.Dialog({
                    autoshow: true,
                    target: 'body',
                    title: o.tips,
                    content: o.safekeyboard_password_tolarge
                }, {
                    configs: [{
                        title: o.ok,
                        eventName: 'ok'
                    }],
                    ok: function () {
                    }
                });
                return;
            }
            var e = this;
            t.ajax({
                url: u + '/cipher/?uuid=' + t('#keyboard_uuid').val() + '&seq=' + t('#keyboard_seq').val(),
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function (e) {
                    e.status == 1 && t(f).val(t('#keyboard_val').val());
                    t('#keyboard_mask').css('display', 'none');
                    t('#keyboard_content').css('display', 'none');
                }
            });
        },
        closeKeyboard: function () {
            t('#keyboard_mask').css('display', 'none');
            t('#keyboard_content').css('display', 'none');
        },
        getKeyboard: function (e, n, r) {
            var i = this;
            t.preloadImages = function () {
                for (var e = 0; e < arguments.length; e++)
                    t('<img>').attr('src', arguments[e]);
            };
            f = e;
            t.ajax({
                url: u + '/keyboard/' + n + '/' + r + '/',
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                success: function (r) {
                    if (r.status == 1) {
                        t('#safekeyboard')[0] || t(e).after('<div id="safekeyboard"></div>');
                        var s = '';
                        switch (n) {
                            case 2:
                                s = i.buildFullKeyboard(r), t('#safekeyboard').html(s), t.preloadImages(u + r.url + 'upper');
                                break;
                            case 3:
                                s = i.buildMoneyKeyboard(r), t('#safekeyboard').html(s);
                                break;
                            default:
                                s = i.buildNumKeyboard(r), t('#safekeyboard').html(s);
                        }
                        i.showKeyboard();
                        i.bindvclick();
                    }
                }
            });
        },
        buildFullKeyboard: function (e) {
            var n = e.keyboard.lower, r = e.keyboard.upper, i = e.keyboard.digitPositions, s = e.keyboard.lowerPositions, a = e.keyboard.upperPositions, f = '<div id="keyboard_mask"></div>';
            f += '<div id="keyboard_content" style="display:none" class="keyboard_content">';
            f += '<div>';
            f += '</div>';
            f += '<div>';
            f += '</div>';
            f += '<div>';
            f += '<img class="keyboard_key_shift margin_l" src="' + u + '/static/images/back.png" name="keyboard_back"/>';
            f += '</div>';
            f += '</div>';
            f += '<div>';
            f += '</div>';
            f += '<div>';
            f += '<img class="keyboard_key_shift" src="' + u + '/static/images/shift.png" id="keyboard_shift_upper"/>';
            f += '<button class="keyboard_key_ok_btn border_l" name="keyboard_ok">' + o.logout_yes + '</button>';
            f += '</div>';
            f += '</div>';
            f += '<div id="keyboard_upper_letters" style="display:none">';
            f += '<div>';
            f += '<input type="hidden" id="keyboard_seq">';
            f += '<img src="" style="display:none;"/>';
            f += '<img src="" style="display:none;"/>';
            f += '<img src="" style="display:none;"/>';
            f += '</div>';
            f += '<div>';
            t.each(e.keyboard.digits, function (t, n) {
                f += '<a class="keyboard_key' + (t == 0 ? '' : ' margin_l') + '"  style="background:url(' + u + e.url + 'letterNum) no-repeat -' + i[t] + 'px top" data="' + n + '"  name="keyboard_keys"></a>';
            });
            f += '</div>';
            f += '<div id="keyboard_lower_letters">';
            f += '<div>';
            for (var l = 0; l < 10; l++)
                f += '<a class="keyboard_key' + (l == 0 ? '' : ' margin_l') + '"  style="background:url(' + u + e.url + 'lower) no-repeat -' + s[l] + 'px top" data="' + n[l] + '"  name="keyboard_keys"></a>';
            f += '</div>', f += '<div>';
            for (var l = 10; l < 19; l++)
                f += '<a class="keyboard_key' + (l == 10 ? '' : ' margin_l') + '"  style="background:url(' + u + e.url + 'lower) no-repeat -' + s[l] + 'px top" data="' + n[l] + '"  name="keyboard_keys"></a>';
            f += '</div>', f += '<div>', f += '<img class="keyboard_key_shift" src="' + u + '/static/images/shift.png" id="keyboard_shift_lower"/>';
            for (var l = 19; l < 26; l++)
                f += '<a class="keyboard_key margin_l"  style="background:url(' + u + e.url + 'lower) no-repeat -' + s[l] + 'px top" data="' + n[l] + '" name="keyboard_keys"></a>';
            f += '<img class="keyboard_key_shift margin_l" src="' + u + '/static/images/back.png" name="keyboard_back"/>', f += '</div>', f += '<div>', f += '<button class="keyboard_key_ok_btn" name="keyboard_cancel">' + o.logout_cancle + '</button>', f += '<button class="keyboard_key_ok_btn border_l" name="keyboard_ok">' + o.logout_yes + '</button>', f += '</div>', f += '</div>', f += '<div id="keyboard_upper_letters" style="display:none">', f += '<div>';
            for (var l = 0; l < 10; l++)
                f += '<a class="keyboard_key' + (l == 0 ? '' : ' margin_l') + '"  style="background:url(' + u + e.url + 'upper) no-repeat -' + a[l] + 'px top" data="' + r[l] + '" name="keyboard_keys"></a>';
            f += '</div>', f += '<div>';
            for (var l = 10; l < 19; l++)
                f += '<a class="keyboard_key' + (l == 10 ? '' : ' margin_l') + '"  style="background:url(' + u + e.url + 'upper) no-repeat -' + a[l] + 'px top" data="' + r[l] + '" name="keyboard_keys"></a>';
            f += '</div>', f += '<div>', f += '<img class="keyboard_key_shift" src="' + u + '/static/images/shift.png" id="keyboard_shift_upper"/>';
            for (var l = 19; l < 26; l++)
                f += '<a class="keyboard_key margin_l " style="background:url(' + u + e.url + 'upper) no-repeat -' + a[l] + 'px top"  data="' + r[l] + '" name="keyboard_keys"></a>';
            return f += '<img class="keyboard_key_shift margin_l" src="' + u + '/static/images/back.png" name="keyboard_back"/>', f += '</div>', f += '<div>', f += '<button class="keyboard_key_ok_btn" name="keyboard_cancel">' + o.logout_cancle + '</button>', f += '<button class="keyboard_key_ok_btn border_l" name="keyboard_ok">' + o.logout_yes + '</button>', f += '</div>', f += '</div>', f += '</div>', f;
        },
        buildNumKeyboard: function (e) {
            var t = '<div id="keyboard_mask"></div>';
            t += '<div id="keyboard_content" style="display:none" class="keyboard_content">';
            t += '<div>';
            t += '<input type="password" id="keyboard_val" readonly="readonly">';
            t += '<input type="hidden" id="keyboard_uuid" value="' + e.uuid + '">';
            t += '<input type="hidden" id="keyboard_seq">';
            t += '<img src="" style="display:none;"/>';
            t += '</div>';
            var n = e.keyboard.digits, r = e.keyboard.digitPositions;
            for (var i = 0; i < 3; i++) {
                t += '<div>';
                for (var s = i * 3 + 1; s < i * 3 + 4; s++)
                    t += '<a class="keyboard_key1' + (s == i * 3 + 1 ? '' : ' margin_l') + '" data="' + n[s] + '" name="keyboard_keys" style="background:url(' + u + e.url + 'num) no-repeat -' + r[s] + 'px top"></a>';
                t += '</div>';
            }
            return t += '<div>', t += '<span class="keyboard_key2_span  margin_l"></span><a class="keyboard_key2" data="' + n[0] + '"  name="keyboard_keys" style="background:url(' + u + e.url + 'num) no-repeat -' + r[0] + 'px top"></a>', t += '<img class="keyboard_key1 margin_l" src="' + u + '/static/images/back_w1.png" name="keyboard_back"/>', t += '</div>', t += '<div>', t += '<button class="keyboard_key_ok_btn" name="keyboard_cancel">' + o.logout_cancle + '</button>', t += '<button class="keyboard_key_ok_btn border_l" name="keyboard_ok">' + o.logout_yes + '</button>', t += '</div>', t += '</div>', t;
        },
        buildMoneyKeyboard: function (e) {
            var t = '<div id="keyboard_mask"></div>';
            t += '<div id="keyboard_content" style="display:none" class="keyboard_content">';
            t += '<div>';
            t += '<input type="password" id="keyboard_val" readonly="readonly">';
            t += '<input type="hidden" id="keyboard_uuid" value="' + e.uuid + '">';
            t += '<input type="hidden" id="keyboard_seq">';
            t += '<img src="" style="display:none;"/>';
            t += '</div>';
            var n = e.keyboard.digits, r = e.keyboard.digitPositions;
            for (var i = 0; i < 3; i++) {
                t += '<div>';
                for (var s = i * 3 + 1; s < i * 3 + 4; s++)
                    console.log(s), t += '<a class="keyboard_key1' + (s == i * 3 + 1 ? '' : ' margin_l') + '" data="' + n[s] + '" name="keyboard_keys" style="background:url(' + u + e.url + 'money) no-repeat -' + r[s] + 'px top"></a>';
                t += '</div>';
            }
            return t += '<div>', t += '<a class="keyboard_key1" style="background:url(' + u + '/static/images/dot.png) no-repeat" data="' + n[10] + '" name="keyboard_keys"></a>', t += '<a class="keyboard_key1 margin_l" style="background:url(' + u + e.url + 'money) no-repeat -' + r[0] + 'px top" data="' + n[0] + '" name="keyboard_keys"></a>', t += '<img class="keyboard_key1 margin_l" src="' + u + '/static/images/back_w1.png" name="keyboard_back"/>', t += '</div>', t += '<div>', t += '<button class="keyboard_key_ok_btn" name="keyboard_cancel">' + o.logout_cancle + '</button>', t += '<button class="keyboard_key_ok_btn border_l" name="keyboard_ok">' + o.logout_yes + '</button>', t += '</div>', t += '</div>', t;
        },
        bindvclick: function () {
            var e = document.getElementsByTagName('img');
            for (var n = 0; n < e.length; n++)
                e[n].addEventListener('touchstart', function () {
                }, false);
            t('[name=\'keyboard_keys\']').on('click', function () {
                t('#keyboard_val').val(t('#keyboard_val').val() + '*');
                var e = t('#keyboard_seq').val(), n = new s();
                n.setPublicKey(a);
                ciper = n.encrypt(t(this).attr('data'));
                t('#keyboard_seq').val(e + (e ? ',' : '') + ciper);
            });
            t('[name=\'keyboard_back\']').on('click', this.delKeyVal);
            t('[name=\'keyboard_cancel\']').on('click', this.closeKeyboard);
            t('[name=\'keyboard_ok\']').on('click', this.submitKeyboard);
            t('#keyboard_shift_lower').on('click', function (e) {
                e.preventDefault();
                t('#keyboard_lower_letters').hide();
                t('#keyboard_upper_letters').show();
            });
            t('#keyboard_shift_upper').on('click', function (e) {
                e.preventDefault();
                t('#keyboard_upper_letters').hide();
                t('#keyboard_lower_letters').show();
            });
        }
    };
});
define('com.csair.mbp.login/login', [
    'zepto',
    'cube/cube',
    'com.csair.mbp.login/login-plugin',
    'com.csair.mbp/mbpserver',
    'text!com.csair.mbp.login/login.html',
    'i18n!com.csair.mbp.login/nls/locale',
    'fastclick',
    'com.csair.mbp/safekeyboard'
], function (e, t, n, r, i, s, o, u) {
    var a, f, l = '', c, h = t.View.extend({
        events: {
            'click #back': 'back',
            'click #regist': 'goToRegist',
            'click #forgetpsd': 'goToForgetPSD',
            'click #loginBtn': 'login',
            'click #remember_psd': 'rememberPSD',
            'click #password': 'showKeyBoard',
            'click #bind_weixin': 'bindWeiXin',
            'click .getCode': 'getCode',
            'click #qqImage': 'qqlogin',
            'click #weiboImage': 'weibologin',
            'click #downLoadApp': 'downloadBtnClicked'
        },
        bindings: { 'Segment:change loginWays': 'onIOChange' },
        initialize: function () {
        },
        render: function () {
            var n = {};
            n.lang = s;
            var r;
            r = _.template(i, n);
            e(this.el).html(r);
            t.View.prototype.render.call(this);
            this.component('loginWays').triggerChange();
            var o = t.Store.loadObject('account');
            return o && (e(this.el).find('#username').val(o), e(this.el).find('#remember_psd')[0].checked = true), this.checkSafeBoardSwitchOn(), this;
        },
        onShow: function () {
            t.View.prototype.onShow.call(this);
            typeof WeixinJSBridge != 'undefined' && e('.login_other').hide();
            var n = t.Session.loadObject('VipDay');
            n && (e('#loginWays').hide(), e('.login_other').hide(), t.Session.deleteObject('VipDay'));
            var r = t.Session.loadObject('fromCheckIn');
            'Y' == r && (e('.login_other').hide(), e('#regist').hide(), e('#memberLabel').hide(), e('#loginWays').hide(), e('#checkInTips').removeClass('infoHide'));
            var i = t.Session.loadObject('openid'), o = t.Session.loadObject('bindedStatus');
            i && 'binded' != o && (e(this.el).find('#checkbox-bar').children().eq(1).show(), t.Session.saveObject('isCheckBindWeiXin', true));
            u && (this.$('#loginByNoneVip').hide(), this.$('#loginWays').hide());
            t.Session.deleteObject('isNeedMemberLogin');
            a && (this.$('#loginByNoneVip').hide(), this.$('#loginWays').hide(), this.$('.login_other').hide());
            t.Session.deleteObject('mobileNeedMemberLogin');
            var a = t.Session.loadObject('mobileNeedMemberLogin');
            if (f) {
                e('#memberActionTip').text('*会员购票有优惠');
            } else {
                e('#memberActionTip').text('');
            }
            var f = false;
            document.addEventListener('keypress', function (e) {
                e.keyCode == 13 && v.login();
            }, true);
            l == 'OFF' && e('#password').removeAttr('readonly');
            t.Session.loadObject('isFromCoupon') && (e('#loginWays').hide(), e('#loginByVip').hide(), e('#loginByNoneVip').show(), e('#back').hide(), e('.title').html('领券登录'), e('.login_other').hide(), e('#regist').hide());
            t.Session.loadObject('isFromCouponTemp') && (e('#loginWays').hide(), e('#loginByVip').show(), e('#loginByNoneVip').hide(), e('#back').hide(), e('.title').html('领券登录'), e('.login_other').hide());
            f ? e('#memberActionTip').text('*会员购票有优惠') : e('#memberActionTip').text('');
            var v = this;
            document.addEventListener('keypress', function (e) {
                e.keyCode == 13 && v.login();
            }, true), l == 'OFF' && e('#password').removeAttr('readonly'), t.Session.loadObject('isFromCoupon') && (e('#loginWays').hide(), e('#loginByVip').hide(), e('#loginByNoneVip').show(), e('#back').hide(), e('.title').html('领券登录'), e('.login_other').hide(), e('#regist').hide()), t.Session.loadObject('isFromCouponTemp') && (e('#loginWays').hide(), e('#loginByVip').show(), e('#loginByNoneVip').hide(), e('#back').hide(), e('.title').html('领券登录'), e('.login_other').hide());
        },
        showKeyBoard: function () {
            if (!l) {
                var n = t.Session.loadObject('com.csair.mbp.booking_new#getwitches');
                if (!n)
                    return c = new t.Loader({ cancelable: true }), setTimeout(this.getSafeDbSwitch, 5000), false;
                var r = 'SAFEDB_CHECK', i = n.switches;
                for (var s = 0; s < i.length; s++)
                    i[s].featureKey == r && (l = i[s].switchStatus);
            }
            if (!l || l == 'OFF')
                return e('#password').attr('readonly') && (e('#password').removeAttr('readonly'), e('#password').focus()), false;
            e('#password').val('');
            var o = e('#password');
            u.getKeyboard(o, 1, 1);
        },
        getSafeDbSwitch: function () {
            c.hide();
            var n = 'SAFEDB_CHECK', r = t.Session.loadObject('com.csair.mbp.booking_new#getwitches');
            if (r) {
                var i = r.switches;
                for (var s = 0; s < i.length; s++)
                    if (i[s].featureKey == n) {
                        l = i[s].switchStatus;
                        break;
                    }
            }
            if (l == 'ON') {
                e('#password').val('');
                var o = e('#password');
                u.getKeyboard(o, 1, 1);
            } else
                e('#password').removeAttr('readonly'), e('#password').focus();
        },
        getwitches: function () {
            var e = this;
            r.postNew({
                url: '/CSMBP/data/config/switches.do',
                params: {},
                text: '活动开关查询',
                success: function (n, r, i) {
                    if (n) {
                        console.log(n), n && n.switches != null && t.Session.saveObject('com.csair.mbp.booking_new#getwitches', n);
                    } else {
                        e.showDialog('查询活动开关无数据返回!');
                    }
                },
                error: function (t, n, r) {
                    e.showDialog('查询活动开关请求错误\uFF01');
                }
            });
        },
        checkSafeBoardSwitchOn: function () {
            var e = 'SAFEDB_CHECK', n = t.Session.loadObject('com.csair.mbp.booking_new#getwitches');
            if (!t.Session.loadObject('com.csair.mbp.booking_new#getwitches'))
                this.getwitches();
            else {
                var r = n.switches;
                for (var i = 0; i < r.length; i++)
                    if (r[i].featureKey == e) {
                        l = r[i].switchStatus;
                        break;
                    }
            }
        },
        goToRegist: function () {
            if (s.Login_language == 'en-us') {
                this.navigate('registEn', { trigger: true });
            } else {
                this.navigate('registZh', { trigger: true });
            }
        },
        goToForgetPSD: function () {
            if (s.language == 'zh-cn') {
                window.location.href = 'http://mskypearl.csair.com/mskypearl/cn_m_toFindPw1.do?lang=zh';
            } else {
                window.location.href = 'http://mskypearl.csair.com/mskypearl/cn_m_toFindPw1.do?lang=en';
            }
        },
        login: function () {
            var i = this;
            if (t.Session.loadObject('isFromCoupon')) {
                if (!e('#contactNum').val()) {
                    i.showDialog('请输入您的手机号\u3002');
                    return;
                }
                var o = e('#contactNum').val(), u = /^1\d{10}$/;
                if (!u.test(o))
                    return i.showDialog('请输入正确的手机\u3002'), false;
                if (!e('#codeNum').val()) {
                    i.showDialog('请输入手机验证码\u3002');
                    return;
                }
                var a = e('#codeNum').val(), f = e('#contactNum').val(), c = {
                    vcode: a,
                    mobile: f
                };
                r.postNew({
                    url: '/CSMBP/data/account/login/login_nm.do',
                    params: c,
                    success: function (e) {
                        e.csErrorMessage && i.showDialog(e.csErrorMessage);
                        e.MESSAGE && i.showDialog(e.MESSAGE);
                        if (e.nonFfpUser && e.nonFfpUser.key == 'S') {
                            t.Session.saveObject('couponlead_user', e);
                            var n = t.Session.loadObject('successPage');
                            window.location.href = window.location.origin + '/touch/com.csair.mbp.index/index.html#' + n;
                        }
                        return;
                    },
                    error: function (e, t, n) {
                        i.showDialog('您的网络好像不给力哦~');
                        return;
                    }
                }, true);
                return;
            }
            var h = e('#loginByVip').css('display');
            if ('none' == h) {
                var p = e('#contactNum').val(), d = e('#codeNum').val();
                if (!i.checkTel(p) && !i.verifyIsEmail(p)) {
                    i.showDialog(s.contactNum_null);
                    return;
                }
                if (d == '') {
                    i.showDialog(s.codeNum_null);
                    return;
                }
                n.request(p, d, 'byNoneVip');
            } else {
                var v = e('#username').val();
                if (l == 'ON')
                    var m = e('#keyboard_uuid').val();
                else
                    var m = e('#password').val();
                var g = document.getElementById('remember_psd').checked;
                g && t.Store.saveObject('account', e('#username').val());
                if (!v) {
                    i.showDialog(s.login_name_null);
                    return;
                }
                if (!e('#password').val()) {
                    i.showDialog(s.login_secret_null);
                    return;
                }
                n.request(v, m, 'byVip');
            }
        },
        rememberPSD: function () {
            var n = document.getElementById('remember_psd').checked;
            console.info('checked:' + n);
            n ? t.Store.saveObject('account', e('#username').val()) : t.Store.deleteObject('account');
        },
        bindWeiXin: function () {
            var e = document.getElementById('bind_weixin').checked;
            console.info('checked:' + e);
            e ? t.Session.saveObject('isCheckBindWeiXin', true) : t.Session.deleteObject('isCheckBindWeiXin');
        },
        back: function () {
            var e = t.Session.loadObject('backPage');
            e && Backbone.history.navigate(e, { trigger: true });
            if (e == null) {
                var n = t.Store.loadObject('backPage');
                Backbone.history.navigate(n, { trigger: true });
            }
        },
        showDialog: function (e) {
            new t.Dialog({
                autoshow: true,
                target: 'body',
                title: s.tips,
                content: e
            }, {
                configs: [{
                    title: s.ok,
                    eventName: 'ok'
                }],
                ok: function () {
                }
            });
        },
        getCode: function () {
            var n = this, i = e('#contactNum').val();
            if (e('.getCode').hasClass('alreadyGet'))
                return;
            if (t.Session.loadObject('isFromCoupon')) {
                if (!e('#contactNum').val()) {
                    n.showDialog('请输入您的手机号\u3002');
                    return;
                }
                var o = e('#contactNum').val(), u = /^1\d{10}$/;
                if (!u.test(o))
                    return n.showDialog('请输入正确的手机\u3002'), false;
            }
            if (!n.checkTel(i) && !n.verifyIsEmail(i)) {
                n.showDialog(s.contactNum_null);
                return;
            }
            var a = 'mobile';
            n.checkTel(i) ? a = 'mobile' : a = 'mail';
            e('.getCode').addClass('alreadyGet');
            var f = 60, l = window.setInterval(function () {
                if (!e('.getCode').hasClass('alreadyGet')) {
                    clearInterval(l);
                    return;
                }
                e('.getCode').html(s.getCode + '(' + --f + ')');
                f == 0 && (e('.getCode').removeClass('alreadyGet'), e('.getCode').html(s.getCode), window.clearInterval(l));
            }, 1000), c = '/CSMBP/data/sms/sendVcode.do', h = {
                mobile: i,
                type: 'BUY_VCODE'
            };
            r.postNew({
                url: c,
                params: h,
                success: function (e, t, r) {
                    e && (e.MESSAGE ? n.showDialog(e.MESSAGE) : n.showDialog(s.sendCode));
                },
                error: function (e, t, r) {
                    n.showDialog(s.networkbad);
                }
            });
        },
        checkTel: function (e) {
            return /^\d+$/.test(e) == 0 || e.indexOf('1') != 0 || e.length != 11 ? false : true;
        },
        verifyIsEmail: function (e) {
            var t = /^\w+([.]\w+)*@\w+([-.]\w+)*\.\w+([.]\w+)*$/;
            return t.test(e) ? true : false;
        },
        onIOChange: function (t) {
            var n = t.getValue();
            if (n == 'queryByVip')
                e('#loginByNoneVip').hide(), e('#loginByVip').show();
            else if (n = 'queryByNoneVip')
                e('#loginByVip').hide(), e('#loginByNoneVip').show();
        },
        qqlogin: function () {
            r.postNew({
                url: '/CSMBP/data/account/login/qqParams.do',
                params: { QQ: 'NH_TOUCH' },
                success: function (e, t, n) {
                    if (e && e.url) {
                        window.location.href = e.url;
                    } else {
                        e && e.MESSAGE ? (alert('登录异常:' + e.MESSAGE), window.location.href = '../com.csair.mbp.index/index.html#com.csair.mbp.index/') : (console.log('login fail'), alert('QQ登录失败'), window.location.href = 'http://m.csair.com');
                    }
                },
                error: function () {
                    console.log('login fail');
                    alert('QQ登录失败');
                    window.location.href = 'http://m.csair.com';
                }
            });
        },
        weibologin: function () {
            r.postNew({
                url: '/CSMBP/data/account/login/weiboParams.do',
                params: { WEIBO: 'NH_TOUCH' },
                success: function (e, t, n) {
                    if (e && e.url) {
                        window.location.href = e.url;
                    } else {
                        e && e.MESSAGE ? (alert('登录异常:' + e.MESSAGE), window.location.href = '../com.csair.mbp.index/index.html#com.csair.mbp.index/') : (console.log('login fail'), alert('微博登录失败'), window.location.href = 'http://m.csair.com');
                    }
                },
                error: function () {
                    console.log('login fail');
                    alert('微博登录失败');
                    window.location.href = 'http://m.csair.com';
                }
            });
        },
        downloadBtnClicked: function () {
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
                this.judgySupportWXpay() ? window.location.href = 'http://mp.weixin.qq.com/mp/redirect?url=http://itunes.apple.com/cn/app/nan-fang-hang-kong/id460310138?mt=8' : window.location.href = 'http://itunes.apple.com/cn/app/nan-fang-hang-kong/id460310138?mt=8';
            } else {
                navigator.userAgent.match(/iPad/i) ? window.location.href = 'https://itunes.apple.com/cn/app/nan-fang-hang-konghd/id590044309?mt=8' : navigator.userAgent.match(/Android/i) ? this.judgySupportWXpay() ? window.location.href = 'http://dd.myapp.com/16891/6A35E32648D8CB43560873E837BF6A3C.apk?fsname=com.csair.mbp_2.3.8_20141225.apk&asr=8eff' : window.open('http://3g.csair.com/CSMBP/CSMBP.apk') : window.open('http://3g.csair.com');
            }
        },
        judgySupportWXpay: function () {
            return typeof WeixinJSBridge != 'undefined' ? true : false;
        }
    });
    return h;
});