const translations = {
    'zh-CN': {
        nav: {
            home: '首页',
            products: '产品',
            team: '团队'
        },
        home: {
            title: '聚焦核心，迅速产生影响力',
            subtitle: 'CoreSpeed 核速径影致力于解决用户核心痛点，打造精简而高效的产品，帮助您快速突破学习与工作中的关键障碍',
            about: {
                title: '关于CoreSpeed',
                desc: '我们是一家专注于解决核心问题的科技公司。通过精准定位用户痛点，运用创新的AI技术，我们打造出简洁而高效的解决方案，帮助用户快速突破瓶颈，产生实质性的影响力。'
            }
        },
        products: {
            title: '我们的产品',
            ecosystem: {
                title: '一个账号，体验 CoreSpeed 全系列产品生态',
                desc: '我们打造了一系列精简而高效的AI工具，帮助您快速突破学习与工作中的关键障碍。从文献解读到知识转化，CoreSpeed 为您提供完整的学习提升解决方案。'
            },
            zhizhi: {
                name: '知之 (ZhiZhi)',
                desc: '您的AI学术陪读助手。打开课件或论文时，AI专家会为您解读每一页内容，让复杂的学术文献变得易于理解。'
            },
            keting: {
                name: '可听',
                desc: 'AI驱动的播客生成工具，多种AI主持人选择，将任何文件转化为精品播客，随时随地收听高质量的学术与专业知识。'
            },
            download: '从 App Store 下载',
            website: '官网'
        },
        team: {
            title: '我们的团队',
            global: '全球增长团队',
            members: {
                milton: {
                    title: '首席执行官 (CEO)',
                    desc: 'PhD辍学创业，多个黑客松奖项得主，互联网+国金，季军（5/340万），发表多篇人工智能金融领域SCI，SSCI论文；全栈开发，在媒体上拥有数万粉丝'
                },
                hao: {
                    title: '首席技术官 (CTO)',
                    desc: '全职创业，多个黑客松奖项得主，发表多篇人工智能领域IEEE论文，全栈开发'
                },
                max: {
                    title: '创始工程师',
                    desc: '核心技术研发与系统架构'
                },
                heather: {
                    title: '首席营销官 (CMO)',
                    desc: '负责品牌战略与市场营销'
                }
            }
        },
        footer: {
            contact: '创始人联系方式',
            founder: 'Founder Milton',
            email: '邮件',
            wechat: '微信',
            copyright: '保留所有权利'
        }
    },
    'en': {
        nav: {
            home: 'Home',
            products: 'Products',
            team: 'Team'
        },
        home: {
            title: 'Focus on Core, Create Impact Fast',
            subtitle: 'CoreSpeed is dedicated to solving core pain points with streamlined and efficient products, helping you breakthrough key barriers in learning and work',
            about: {
                title: 'About CoreSpeed',
                desc: 'We are a tech company focused on solving core problems. Through precise identification of user pain points and innovative AI technology, we create simple yet effective solutions that help users breakthrough bottlenecks and create substantial impact.'
            }
        },
        products: {
            title: 'Our Products',
            ecosystem: {
                title: 'One Account, Experience the Complete CoreSpeed Product Ecosystem',
                desc: 'We have created a series of streamlined and efficient AI tools to help you quickly overcome key obstacles in learning and work. From literature interpretation to knowledge transformation, CoreSpeed provides you with a complete learning enhancement solution.'
            },
            zhizhi: {
                name: 'ZhiZhi',
                desc: 'Your AI academic reading companion. When you open courseware or papers, AI experts will interpret each page of content, making complex academic literature easy to understand.'
            },
            keting: {
                name: 'KeTing',
                desc: 'AI-driven podcast generation tool with multiple AI host options, transforming any file into premium podcasts, allowing you to listen to high-quality academic and professional knowledge anytime, anywhere.'
            },
            download: 'Download on App Store',
            website: 'Website'
        },
        team: {
            title: 'Our Team',
            global: 'Global Growth Team',
            members: {
                milton: {
                    title: 'Chief Executive Officer (CEO)',
                    desc: 'PhD dropout entrepreneur, multiple hackathon award winner, Internet+ National Gold Medal, 3rd place (5/3.4M), published multiple SCI and SSCI papers in AI finance; Full-stack developer with tens of thousands of media followers'
                },
                hao: {
                    title: 'Chief Technology Officer (CTO)',
                    desc: 'Full-time entrepreneur, multiple hackathon award winner, published multiple IEEE papers in AI, full-stack developer'
                },
                max: {
                    title: 'Founding Engineer',
                    desc: 'Core technology development and system architecture'
                },
                heather: {
                    title: 'Chief Marketing Officer (CMO)',
                    desc: 'Brand strategy and marketing'
                }
            }
        },
        footer: {
            contact: 'Founder Contact',
            founder: 'Founder Milton',
            email: 'Email',
            wechat: 'WeChat',
            copyright: 'All Rights Reserved'
        }
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        keys.forEach(k => {
            translation = translation[k];
        });
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    document.documentElement.lang = lang;
    localStorage.setItem('preferred-language', lang);
}

// 初始化语言
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferred-language') || navigator.language;
    setLanguage(preferredLanguage.startsWith('zh') ? 'zh-CN' : 'en');
}); 