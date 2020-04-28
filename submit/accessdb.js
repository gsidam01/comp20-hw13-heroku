
async function query_tick(ticker)
{
    const my_result = document.querySelector("#my_result ");
    const response = await fetch('ticker/' + ticker);
    const json = await response.json();
    my_result.innerHTML = "Ticker = " + json.Ticker;
}

async function query_comp(company)
{
    const my_result = document.querySelector("#my_result");
    const response = await fetch('company/' + company);
    const json = await response.json();
    my_result.innerHTML = "Company = " + json.Company;
}


function form_submit()
{
    if (document.getElementById("comp").checked) {
        query_tick(document.getElementById("input_field").value);
    } else {
        query_comp(document.getElementById("input_field").value);
    }
}
