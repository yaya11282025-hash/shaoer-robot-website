// 移动端导航菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            // 汉堡菜单动画
            const spans = hamburger.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // 点击导航链接后关闭移动端菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    });

    // 联系表单提交处理
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // 表单验证
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            if (!name || !phone || !message) {
                e.preventDefault();
                alert('请填写所有必填项！');
                return;
            }

            // 手机号验证
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(phone)) {
                e.preventDefault();
                alert('请输入正确的手机号码！');
                return;
            }

            // 微信号验证（如果填写了）
            const wechat = document.getElementById('email').value;
            if (wechat && wechat.length > 0) {
                // 微信号基本验证（6-20位，字母数字下划线减号）
                const wechatRegex = /^[a-zA-Z0-9_-]{6,20}$/;
                if (!wechatRegex.test(wechat)) {
                    e.preventDefault();
                    alert('请输入正确的微信号格式！');
                    return;
                }
            }

            // 表单通过验证，将由Formspree处理提交
            // 提交后会跳转到Formspree的感谢页面
            // 你可以在Formspree后台查看所有提交的数据
        });
    }

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 页面滚动时的动画效果
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 为需要动画的元素添加观察
    const animatedElements = document.querySelectorAll('.feature-card, .service-item, .team-member, .value-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 导航栏滚动效果
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });
});
