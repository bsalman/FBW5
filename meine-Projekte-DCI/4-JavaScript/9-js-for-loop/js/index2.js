for (let i = 0; i<= 10; i++) {
      for (let x = 0; x<=10;x++) {
          if (i==0||i==10||x==0||x==10||i==x||x==10-i)
          {document.write("*")}
          else {
              document.write("&nbsp&nbsp")
          }
      }
      document.write("<br>")
    };

    document.write("///////////////////////////////////////////////////<br>");
    function showBox(num) {
        for (let i = 0; i < num; i++) {
            for (let x = 0; x < num; x++) {
                if (i==0||x==0||x==num-1||i==num-1||i==x||i+x==num-1) {
                    document.write("*")
                    
                }
                else{
                    document.write("&nbsp ")
                }
                
            }
            document.write("<br>")
        }
        
    }
    showBox(15)