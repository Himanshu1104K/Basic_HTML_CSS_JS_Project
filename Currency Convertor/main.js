const populate = async (value, currency,value2) => {
    let myStr = ""
    let data;
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_wOkRLRgwWlKspEJdTGlEZtPdEl20VxJDtWjU34zJ&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"
    document.querySelector(".output-heading").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += `  <tr>
                        <td>${rJson["data"][key]["code"]}</td>
                        <td>${Math.round(rJson["data"][key]["value"] * value)}</td>
                    </tr> 
                `
        if(rJson["data"][key]["code"] == value2){
            data = rJson["data"][key]["value"] * value;
        }
    }
    const Cvalue2 = document.querySelector("input[name='Cvalue2']");
    Cvalue2.value = data;
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;

}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='Cvalue1']").value);
    const currency = document.querySelector("select[name='Currency-One']").value;
    const value2 = document.querySelector("select[name='Currency-Two']").value;
    populate(value, currency, value2);
})