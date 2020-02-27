let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

let error = 0;

function chooseEcpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
			console.log(a);
			console.log(b);
		if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && 
		a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else if (a == null && b == null || a == '' && b == '') {
			if (i == 0) {
				error++;
			} if (i == 1) {
				error++;
			}
			if (error == 2) {
				location.reload();
			}
	  }
	}
}

chooseEcpenses();

function detectDayBudget() {
	appData.moneyPerDay = appData.budget / 30;
	alert("Ежедневный бюджет составляет: " + (appData.moneyPerDay).toFixed());
}
detectDayBudget();

// let i = 0;

// while (i < 2) {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 	b = prompt("Во сколько обойдется?", '');
// 	console.log(a);
// 	console.log(b);
// if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && 
// a != '' && b != '' && a.length < 50) {
// 	console.log("done");
// 	appData.expenses[a] = b;
// } else if (a == null && b == null || a == '' && b == '') {
// 	if (i == 0) {
// 		error++;
// 	} if (i == 1) {
// 		error++;
// 	}
// 	if (error == 2) {
// 		location.reload();
// 	}
// }
// i++;
// }


// do {
// 	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		b = prompt("Во сколько обойдется?", '');
// 	console.log(a);
// 	console.log(b);
// 	if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null &&
// 		a != '' && b != '' && a.length < 50) {
// 		console.log("done");
// 		appData.expenses[a] = b;
// 	} else if (a == null && b == null || a == '' && b == '') {
// 		if (i == 0) {
// 			error++;
// 		}
// 		if (i == 1) {
// 			error++;
// 		}
// 		if (error == 2) {
// 			location.reload();
// 		}
// 	}
// 	i++;
// } 	while (i < 2)

function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log("Минимальный уровень достатка.");
	} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
		console.log("Средний уровень достатка.");
	} else if (appData.moneyPerDay >= 2000) {
		console.log("Высокий уровень достатка.");
	} else {
		console.log("Произошла ошибка!");
	}
	
}

detectLevel();


function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
		
		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let questionForOptionalExpenses = prompt("Статья необязательных расходов: ");
		appData.optionalExpenses[i] = questionForOptionalExpenses;
	}
}

chooseOptExpenses();

