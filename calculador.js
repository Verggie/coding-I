<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }
        .calculator {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .calculator input {
            width: 100%;
            padding: 10px;
            font-size: 1.5em;
            text-align: right;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        .calculator button {
            width: 23%;
            padding: 15px;
            margin: 2px;
            font-size: 1.2em;
            border: 1px solid #ccc;
            border-radius: 4px;
            cursor: pointer;
        }
        .calculator button.operator {
            background-color: #f4a261;
            color: #fff;
        }
        .calculator button.double {
            width: 48%;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div>
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('/')">/</button>
            <button onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('-')">-</button>
        </div>
        <div>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('+')" class="operator">+</button>
        </div>
        <div>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="calculate()" class="operator">=</button>
        </div>
        <div>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('0')" class="double">0</button>
        </div>
        <div>
            <button onclick="appendToDisplay('.')">.</button>
        </div>
    </div>

    <script>
        function appendToDisplay(value) {
            const display = document.getElementById('display');
            display.value += value;
        }

        function clearDisplay() {
            document.getElementById('display').value = '';
        }

        function calculate() {
            const display = document.getElementById('display');
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        }
    </script>
</body>
</html>
