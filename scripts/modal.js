let modalBtns = document.querySelectorAll(".modal-show");

let modal = document.querySelector("#modal");
let modalOrder = document.querySelector("#modal-order");
let modalClose = document.querySelector("#modal-hide");
let modalOrderClose = document.querySelector("#modal-order-hide");
let modalSubmit = document.querySelector("#modal-submit");

modalBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        modal.classList.add("modal-active");
    })
})

modalClose.addEventListener("click", e => {
    modal.classList.remove("modal-active");
})

modalSubmit.addEventListener("click", async e => {
    e.preventDefault();

    var form = document.forms[0];
    var isValid = form.checkValidity();
    form.reportValidity();
    if (!isValid) {
        return;
    }

    let inputs = form.elements;
    
    let model = {
        name: inputs['name'].value,
        phone: inputs['phone'].value,
        blades: inputs['blades'].value,
        complect: inputs['complect'].value,
        battery: inputs['battery'].value,
        plasticColor: inputs['plasticColor'].value,
        stand: inputs['stand'].value,
        cabel: inputs['cabel'].value,
    }
    
    const supabaseUrl = 'https://zosyyyvbdmrvntaagubh.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpvc3l5eXZiZG1ydm50YWFndWJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDM2MjQxMCwiZXhwIjoxOTk5OTM4NDEwfQ.tK5p4WVf1R3CyA4GfDWtiI6UwZq9Juyr4FhnnNqBSOA';
    const client = supabase.createClient(supabaseUrl, supabaseKey);
    
    const { data, error } = await client
        .from("orders")
        .insert(model)

    modal.classList.remove("modal-active");
    modalOrder.classList.add("modal-active");
})


modalOrderClose.addEventListener("click", e => {
    modalOrder.classList.remove("modal-active");
})
