async function LoadData(){ // async function
    // Handle loading data to table.

    
   let table =  document.getElementById("tb_data"); // grab table, so we can insert table rows

    if(table == null){
        console.log("Table doesn't exist!")
        return 1;
    }

    try{

        let response = await fetch('BackEnd/sql.php');

        let data = await response.json();

        console.log(data.message);

        let nrow = table.insertRow();
        let ncell = nrow.insertCell();

        ncell.innerHTML = "Successful DB connection established!";
        console.log("Data loaded!")
        return 0;

    }catch(error){
        console.log(error.message);
        return 1;
    }


}

LoadData();