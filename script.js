const dialog = document.getElementById('mydialog');

    function showdialog() {
        dialog.showModal();
    }

    function closedialog() {
        dialog.close();
    }
    
    function check() {    
const password = "CLOT";
const inputpass = document.getElementById("inputpass").value;
const error = "Não, não.. Isso não parece certo.";
        
        if (inputpass === password) {
            window.location.href ="secret001.html";
        } else {
            alert(error);
            document.getElementById("inputpass").value = "";
        }
    }