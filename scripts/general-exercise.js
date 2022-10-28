const a = 10;
      const b = 2;
      let result = null;
      
      const activity1 = () => {
        if(b != 0) {
        result = a / b;
        alert(`Result : ${result}`);
      } else {
        alert("Can't use 0");
      }
    }
    document.getElementById('activity1-button')