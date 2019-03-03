app.controller("expController", ["$scope", function ($scope) {
        $scope.expCount = function (startDate, endDate) {
            if (endDate === "") {
                endDate = new Date();
            }
            var dateDif = new Date(endDate - startDate);
            years = dateDif.getFullYear() - 1970;
            months = dateDif.getMonth();
            var date = 'Всего: ';
            switch (years) {
                case 1:
                    date += years + ' год и ';
                    break;
                case 2:
                case 3:
                case 4:
                    date += years + ' года и ';
                    break;
                default:
                    date += years + ' лет и ';
                    break;
            }
            switch (months) {
                case 1:
                    date += months + ' месяц';
                    break;
                case 2:
                case 3:
                case 4:
                    date += months + ' месяца';
                    break;
                default:
                    date += months + ' месяцев';
                    break;
            }
            return date;
        };
        $scope.exps = [
            {
                img: "img/cmx.png",
                name: "cinimex",
                last: "<div><s>Младший разработчик</s></div><div><s>Младший специалист по разработке</s></div>",
                current: "Разработчик",
                startDate: new Date(2017, 7, 4),
                endDate: "",
                desc: "<h1><a href=\"https://www.cinimex.ru\" target=\"_blank\" title=\"cinimex.ru\">АО Синимекс-Информатика</a></h1>Компания &laquo;Синимекс&raquo; специализируется на проектировании архитектуры интеграционных решений, разработке заказных решений, внедрении собственных разработок и тестировании профильного ПО в банковском секторе (мой опыт в Россельхозбанке, Банк ВТБ, Почта Банк).<br>Текущие задачи:<br>- IBM Integration Bus<br>- IBM WebSphere MQ<br>- IBM DataPower Gateway<br>- WebSphere Application Server<br>- CI/CD, Jenkins, Jira, Git, Unix<br>- Java, Groovy, Gradle, ESQL, SQL<br>- SOAP, REST, JSON, XML, XSD, XSLT<br>- JUnit, Test Automation, Cinimex Test Toolkit<br>- СКАД &laquo;Сигнатура&raquo;, СКЗИ &laquo;Янтарь&raquo;, АРМ КБР-Н",
                hr: "<hr>"
            },
            {
                img: "img/vez.png",
                name: "вэз",
                last: "",
                current: "Инженер расчетно-технического отдела",
                startDate: new Date(2016, 7, 4),
                endDate: new Date(2017, 4, 31),
                desc: "<h1><a href=\"http://vorez.org/\" target=\"_blank\" title=\"vorez.org\">ООО Воронежский экспериментальный завод</a></h1>Основным направлением деятельности &laquo;ВЭЗ&raquo; является производство комплектных  трансформаторных подстанций, электрощитового высоковольтного и низковольтного оборудования, блочно-модульных зданий и различной сложности.<br>Выполняемые задачи:<br>- расчет стоимости электрооборудования до 10кВ:<br>ПКУ, МТП, КТП, БКТП, КСО393, КСО298, ЩО70, ГРЩ, ВРУ<br>- общение с заказчиком с целью предложения более дешевых аналогов<br>- открытие заказа в производство, выписка накладных<br>- техническое сопровождение заказчика<br>- консультация производственных рабочих, конструкторов, релейщиков<br>- консультация технических специалистов заказчиков<br>- автоматизация процесса расчета<br>- разработка нового конструктива",
                hr: "<hr>"
            },
            {
                img: "img/cem.png",
                name: "цэм",
                last: "<div><s>Инженер по комплектации оборудования</s>",
                current: "Инженер по подготовке производства",
                startDate: new Date(2014, 7, 4),
                endDate: new Date(2016, 6, 4),
                desc: "<h1><a href=\"https://www.celmont.ru/\" target=\"_blank\" title=\"celmont.ru\">ООО ЦентрЭлектроМонтаж</a></h1>Основной специализацией &laquo;ЦЭМ&raquo; является реализация комплексных решений по электроснабжению системы управления приводами машин и механизмов, автоматизации и диспетчеризации технологических процессов и инженерных систем зданий и сооружений, систем электроосвещения и систем информатизации объекта.<br>Выполняемые задачи:<br>- сборка и расчет стоимости электрощитового оборудования<br>- разработка конструкторской документации<br>- внедрение современных технологий<br>- знание комплектующих производителей:<br>АВВ, DKC, Rittal, Schneider Electric, ИЭК, КЭАЗ, Провенто",
                hr: "<hr>"
            },
            {
                img: "img/atos.png",
                name: "atos",
                last: "",
                current: "Консультант SAP BI",
                startDate: new Date(2013, 9, 4),
                endDate: new Date(2014, 8, 4),
                desc: "<h1><a href=\"https://atos.net/ru/russia\" target=\"_blank\" title=\"atos.net\">Атос АйТи Солюшенс энд Сервисез</a></h1>&laquo;Atos&raquo; – международный лидер в области цифровой трансформации, предоставляющий высокотехнологичные оборудование и сервисы в области консалтинга, управляемых сервисов и аутсорсинга бизнес-процессов, облачных вычислений, безопасности и управления большими данными, а также транзакционные сервисы.<br>Выполняемые задачи:<br>- Обучение и сертификация SAP<br>- Консультация SAP BI компании РУСАЛ"
            }
        ];
    }]);
