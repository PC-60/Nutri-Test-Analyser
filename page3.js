function updateForm() {
    var condition = document.getElementById("condition").value;
    var allParams = document.getElementsByClassName("parameters");
    for (var i = 0; i < allParams.length; i++) {
        allParams[i].style.display = 'none'; // Hide all parameters
    }
    
    if (condition) {
        document.getElementById(condition + "Params").style.display = 'block'; // Show only relevant parameters
    }
}

function getRecommendation() {
    var condition = document.getElementById("condition").value;
    var recommendation = document.getElementById("recommendation");
    var allFilled = true;

    // Check if all parameters for the selected disease are entered
    if (condition) {
        var inputs = document.querySelector('#' + condition + 'Params').getElementsByTagName('input');
        for (var input of inputs) {
            if (input.value === "") {
                allFilled = false;
                break;
            }
        }

        if (!allFilled) {
            recommendation.innerHTML = "<strong>Warning:</strong> Please enter all parameters.";
            return; // Exit the function if not all parameters are filled
        }
    } else {
        recommendation.innerHTML = "<strong>Warning:</strong> Please select a health condition.";
        return;
    }
    switch (condition) {
        case 'diabetes':
            var fasting_glucose = parseInt(document.getElementById("fasting_glucose").value);
            var hbA1c = parseFloat(document.getElementById("hbA1c").value);
            var ogtt = parseInt(document.getElementById("ogtt").value);
            if (fasting_glucose > 99 || hbA1c > 5.7 || ogtt > 140) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Elevated glucose levels suggest a risk of diabetes. Consider a low-carb, low-sugar diet and consult a healthcare provider.";
            } else if (fasting_glucose < 70 || hbA1c < 4 || ogtt < 70) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Low glucose levels may indicate hypoglycemia. Include complex carbohydrates and frequent small meals. Consult a healthcare provider.";
            } else {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Glucose levels appear normal. Maintain a balanced diet with regular physical activity.";
            }
            break;
        case 'cholesterol':
            var total_cholesterol = parseInt(document.getElementById("total_cholesterol").value);
            var ldl = parseInt(document.getElementById("ldl").value);
            var hdl = parseInt(document.getElementById("hdl").value);
            if (total_cholesterol > 200 || ldl > 100 || hdl < 40) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> High cholesterol levels detected. Increase intake of omega-3 fats, reduce saturated fats, and consider consulting a healthcare provider.";
            } else if (total_cholesterol < 120 || ldl < 50 || hdl > 60) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Some cholesterol levels are unusually low. Ensure a diet balanced in healthy fats. Discuss with your doctor.";
            } else {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Cholesterol levels are within normal ranges. Continue with a diet low in saturated fats and rich in fruits and vegetables.";
            }
            break;
        case 'thyroid':
            var tsh = parseFloat(document.getElementById("tsh").value);
            var free_t4 = parseFloat(document.getElementById("free_t4").value);
            var t3 = parseFloat(document.getElementById("t3").value);
            if (tsh < 0.4 || free_t4 < 4.5 || t3 < 80) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Low thyroid hormone levels may indicate hypothyroidism. Consider increasing iodine intake and consult an endocrinologist.";
            } else if (tsh > 4.0 || free_t4 > 11.2 || t3 > 200) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> High thyroid hormone levels may suggest hyperthyroidism. Limit iodine and consult an endocrinologist.";
            } else {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Thyroid levels appear normal.";
            }
            break;
        case 'bloodPressure':
            var systolic = parseInt(document.getElementById("systolic").value);
            var diastolic = parseInt(document.getElementById("diastolic").value);
            var map = parseInt(document.getElementById("map").value);
            if (systolic >= 120 || diastolic >= 80) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Elevated blood pressure detected. Consider reducing sodium intake, increasing physical activity, and possibly consulting a healthcare provider.";
            } else if (systolic < 90 || diastolic < 60) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Low blood pressure detected. Increase fluid and salt intake moderately and consult a healthcare provider if symptoms persist.";
            } else {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Blood pressure levels are normal. Maintain a healthy lifestyle.";
            }
            break;
        case 'obesity':
            var bmi = parseFloat(document.getElementById("bmi").value);
            var waist_circumference = parseInt(document.getElementById("waist_circumference").value);
            var whr = parseFloat(document.getElementById("whr").value);
            if (bmi >= 25 || waist_circumference >= 40 || whr >= 0.90) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Measurements indicate obesity. Consider a calorie-restricted diet, increased physical activity, and possibly consulting a healthcare provider.";
            } else if (bmi < 18.5) {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Low BMI may indicate underweight. Increase caloric intake with nutrient-dense foods and consult a healthcare provider.";
            } else {
                recommendation.innerHTML = "<strong>Recommendation:</strong> Measurements are within a healthy range. Continue maintaining a balanced diet and regular exercise.";
            }
            break;
        default:
            recommendation.innerHTML = "<strong>Recommendation:</strong> Please select a health condition and enter the required parameters.";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateForm(); // Set form state on page load
});
