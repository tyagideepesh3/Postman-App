console.log('project 6')
//intialize no. of parameters
let addedParamsCount = 0;
// to hide the parameter box
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';
//if the user clicks the params box than hide the json box and display the parameter box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click' , ()=>{
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})
//if the user clicks the json box than hide the params box and display the json box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click' , ()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})
//if the user clicks on the + than add more parameters
let addParams = document.getElementById('addParams');
addParams.addEventListener('click' , () =>{
    let params = document.getElementById('params')
    let string = `
            <div class="form-row">
                <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamsCount + 2}</label>
                <div class="col-md-4 mx-2">
                    <input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter parameter ${addedParamsCount + 2} Key">
                </div>
                <div class="col-md-4 mx-2">
                    <input type="text" class="form-control" id="parameterValue${addedParamsCount + 2}" placeholder="Enter parameter ${addedParamsCount + 2} value">
                </div>
                <button class="btn btn-primary small" id="addParams">-</button>
            </div>
    `
    addedParamsCount++;
    
})