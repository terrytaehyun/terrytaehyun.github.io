var data = {
// CALC_BTNS_LEFT
	"sqrt": {
			"title": "sqrt",
			"alternative": "Square Root, &radic;",
			"description": "Finds a root that produces the radicand when multiplied by itself",
			"example": "<span class=\"OP_ENC\">sqrt(</span> <span class=\"OP_ENC\">4</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">2</span>"
			},

	"10^x": {
			"title": "10^x",
			"alternative": "Power base-10",
			"description": "Compute 10 raised by x",
			"example": "<span class=\"OP_ENC\">powBase10(</span> <span class=\"OP_ENC\">3</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">1000</span>"
			},

	"nthroot": {
			"title": "nthroot",
			"alternative": "nthroot",
			"description": "Finds a root that produces the radicand when multiplied by itself n times",
			"example": "<span class=\"OP_ENC\">3</span> <span class=\"OP_ENC\">nthroot(</span> <span class=\"OP_ENC\">27</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">3</span>"
			},

	"log": {
			"title": "log",
			"alternative": "Logarithm, log base-10",
			"description": "Finds a quantity representing the power to which a fixed number (the base-10) must be raised to produce a given number.",
			"example": "<span class=\"OP_ENC\">log(</span> <span class=\"OP_ENC\">100</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">2</span>"
			},

	"ln": {
			"title": "ln",
			"alternative": "Natural logarithm, log base-e",
			"description": "Finds a quantity representing the power to which a fixed number (the base-e; Euler's constant) must be raised to produce a given number.",
			"example": "<span class=\"OP_ENC\">2</span> <span class=\"OP_ENC\">ln(</span> <span class=\"OP_ENC\">e</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">2</span>"
			},

	"asin": {
			"title": "asin",
			"alternative": "Arc-Sine",
			"description": "Finds inverse sine of provided input",
			"example": "<span class=\"OP_ENC\">asin(</span> <span class=\"OP_ENC\">sin(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">60</span>"
			},

	"sin": {
			"title": "sin",
			"alternative": "Sine",
			"description": "Finds the value that equals to the ratio of the side opposite a given angle to the hypotenuse.",
			"example": "<span class=\"OP_ENC\">sin(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">0.8660...</span> when in degree mode"
			},

	"acos": {
			"title": "acos",
			"alternative": "Arc-Cosine",
			"description": "Finds inverse cosine of provided input",
			"example": "<span class=\"OP_ENC\">acos(</span> <span class=\"OP_ENC\">cos(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">60</span>"
			},

	"cos": {
			"title": "cos",
			"alternative": "Cosine",
			"description": "Finds the value that equals to the ratio of the side adjacent to an acute angle to the hypotenuse.",
			"example": "<span class=\"OP_ENC\">cos(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">0.5</span> when in degree mode"
			},
	
	"atan": {
			"title": "atan",
			"alternative": "Arc-Tangent",
			"description": "Finds inverse tangent of provided input",
			"example": "<span class=\"OP_ENC\">atan(</span> <span class=\"OP_ENC\">tan(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">60</span>"
			},

	"tan": {
			"title": "tan",
			"alternative": "Tangent",
			"description": "Finds the value that equals to the ratio of the length of the opposite side to the length of the adjacent side",
			"example": "<span class=\"OP_ENC\">tan(</span> <span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">1.7320...</span> when in degree mode"
			},

// CALC_BTNS_MID
	"^": {
			"title": "^",
			"alternative": "Exponentiation, **, To the power of",
			"description": "Input previous to the operator will be raised by input that follows the operator",
			"example": "<span class=\"OP_ENC\">2</span> <span class=\"OP_ENC\">^</span> <span class=\"OP_ENC\">5</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">32</span>"
			},

	"inv": {
			"title": "inv",
			"alternative": "Inverse",
			"description": "Input will be raised by -1",
			"example": "<span class=\"OP_ENC\">inv(</span> <span class=\"OP_ENC\">2</span> <span class=\"OP_ENC\">)</span> <span class=\"OP_ENC\">=</span> will return 0.5"
			},

	"rad/deg": {
			"title": "rad/deg",
			"alternative": "To radian/degree mode",
			"description": "Provided angle values for trigonometric will be treated as radian/degree",
			"example": "Pressing rad/deg button should trigger indicator to point at current mode the calculator is in"
			},

	"delete": {
			"title": "delete",
			"alternative": "delete",
			"description": "Latest input will be removed from the screen",
			"example": "if <span class=\"OP_ENC\">100+20</span> is currently entered in screen, pressing<span class=\"OP_ENC\">delete</span> will result <span class=\"OP_ENC\">100+2</span>"
			},

	"C": {
			"title": "C",
			"alternative": "Clear",
			"description": "Current input shown in the screen will be cleared",
			"example": "<span class=\"OP_ENC\">10+5</span> <span class=\"OP_ENC\">C</span> will return <span class=\"OP_ENC\">0</span>, clearing the displayed expression"
			},

	"AC": {
			"title": "AC",
			"alternative": "All-Clear",
			"description": "Current input shown in the screen, and previous answer (which can be retrieved using < ans > operator) will be cleared",
			"example": "<span class=\"OP_ENC\">2nthroot(25)</span> <span class=\"OP_ENC\">AC</span> will return 0. Pressing <span class=\"OP_ENC\">ans</span> operator will return 0, since its memory is cleared as well"
			},

	"7": {
			"title": "7",
			"alternative": "Seven",
			"description": "Numerical value 7",
			"example": "Adds <span class=\"OP_ENC\">7</span> to the current expression"
			},

	"8": {
			"title": "8",
			"alternative": "Eight",
			"description": "Numerical value 8",
			"example": "Adds <span class=\"OP_ENC\">8</span> to the current expression"
			},

	"9": {
			"title": "9",
			"alternative": "Nine",
			"description": "Numerical value 9",
			"example": "Adds <span class=\"OP_ENC\">9</span> to the current expression"
			},

	"4": {
			"title": "4",
			"alternative": "Four",
			"description": "Numerical value 4",
			"example": "Adds <span class=\"OP_ENC\">4</span> to the current expression"
			},

	"5": {
			"title": "5",
			"alternative": "Five",
			"description": "Numerical value 5",
			"example": "Adds <span class=\"OP_ENC\">5</span> to the current expression"
			},

	"6": {
			"title": "6",
			"alternative": "Six",
			"description": "Numerical value 6",
			"example": "Adds <span class=\"OP_ENC\">6</span> to the current expression"
			},

	"1": {
			"title": "1",
			"alternative": "One",
			"description": "Numerical value 1",
			"example": "Adds <span class=\"OP_ENC\">1</span> to the current expression"
			},

	"2": {
			"title": "2",
			"alternative": "Two",
			"description": "Numerical value 2",
			"example": "Adds <span class=\"OP_ENC\">2</span> to the current expression"
			},

	"3": {
			"title": "3",
			"alternative": "Three",
			"description": "Numerical value 3",
			"example": "Adds <span class=\"OP_ENC\">3</span> to the current expression"
			},

	"0": {
			"title": "0",
			"alternative": "Zero",
			"description": "Numerical value 6",
			"example": "Adds <span class=\"OP_ENC\">0</span> to the current expression"
			},

	".": {
			"title": ".",
			"alternative": "Decimal Point",
			"description": "Used to represent decimal value",
			"example": "Adds <span class=\"OP_ENC\">.</span> to the current expression"
			},

	"ans": {
			"title": "ans",
			"alternative": "Previous Answer",
			"description": "Retrieves result of previously computed expression",
			"example": "Adds result of previously computed result to the current expression"
			},

//CALC_BTNS_RIGHT
	"pi": {
			"title": "pi",
			"alternative": "&pi;, 3.14159265359...",
			"description": "Ratio of a circle's circumference to its diameter. Constant value",
			"example": "Adds <span class=\"OP_ENC\">&pi;</span> to the current expression"
			},

	"e": {
			"title": "e",
			"alternative": "Euler's Number, 2.71828182846...",
			"description": "limit of (1 + 1/n)<sup>n</sup>, as n approaches infinity. Constant value",
			"example": "Adds <span class=\"OP_ENC\">e</span> to the current expression"
			},

	"(": {
			"title": "(",
			"alternative": "Open Bracket",
			"description": "Expression enclosed by the open and close bracket will be evaluated in priority. Must be paired up with the close bracket.",
			"example": "Adds <span class=\"OP_ENC\">(</span> to the current expression"
			},

	")": {
			"title": ")",
			"alternative": "Close Bracket",
			"description": "Expression enclosed by the open and close bracket will be evaluated in priority. Must be paired up with the open bracket.",
			"example": "Adds <span class=\"OP_ENC\">)</span> to the current expression"
			},

	"%": {
			"title": "%",
			"alternative": "Modulo",
			"description": "Finds the remainder after division operation of one number by another",
			"example": "<span class=\"OP_ENC\">10</span> <span class=\"OP_ENC\">%</span> <span class=\"OP_ENC\">6</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">4</span>"
			},

	"×": {
			"title": "×",
			"alternative": "Multiply, Times by",
			"description": "Value equivalent to adding as many copies of value previous to the operator, as the value following the operator ",
			"example": "<span class=\"OP_ENC\">3</span> <span class=\"OP_ENC\">×</span> <span class=\"OP_ENC\">20</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">60</span>"
			},

	"÷": {
			"title": "÷",
			"alternative": "Division",
			"description": "Splitting value previous to the operator with the value following the operator",
			"example": "<span class=\"OP_ENC\">60</span> <span class=\"OP_ENC\">÷</span> <span class=\"OP_ENC\">20</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">3</span>"
			},

	"+": {
			"title": "+",
			"alternative": "Addition",
			"description": "Calculates the total of two values by adding them",
			"example": "<span class=\"OP_ENC\">15</span> <span class=\"OP_ENC\">+</span> <span class=\"OP_ENC\">5</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">20</span>"
			},

	"-": {
			"title": "-",
			"alternative": "Subtract, Negative",
			"description": "Calculate difference between value previous to the operator and the value that follows the operator. Can also be used to negate the values following the operator",
			"example": "<span class=\"OP_ENC\">15</span> <span class=\"OP_ENC\">-</span> <span class=\"OP_ENC\">5</span> <span class=\"OP_ENC\">=</span> will return <span class=\"OP_ENC\">10</span>"
			},

	"=": {
			"title": "=",
			"alternative": "Compute, Equals",
			"description": "Compute the expression in the display",
			"example": "Pressing <span class=\"OP_ENC\">=</span> will trigger the application to compute the provided expression"
			},
}