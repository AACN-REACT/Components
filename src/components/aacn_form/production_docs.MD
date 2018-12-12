# AACN FORMS 

_An easy to use react component for generating forms_


## Production Notes 

+ The basic implementation will be to generate the form through using a function,  we will pass as arguments our conifguration object and the DOM node on which we wish to mount our form.

    eg.
       ```createForm(  *configurationObject ,DOMnode* )  //  Form will be generated and mounted onto our page ```

+ ASP.NET core version of CRA. Manually Updated react-scripts, react, and bootstrap
+ Amendment to functionality:
- form will be automaticlaly mounted to any div named 'form'   
- Conifiguration will be passed down through html div tag 
- Default forms will render in absence of any config object passed down


## Break Down of Code

### How does the form inject into the HTML?

Div tags act as containers for the form, they should be assigned an id that begins with the word 'form' , this is how javascript finds them 
The divs are the containers of the form and your styling should start with them.


 One useful style to pass to the containing div would be the width property, the attached form will automatically fill the width of the div.
aacnform, in the index file will iterate of the div nodes searching for ones with the word form at the beginning of their id. It will then take the string past down 
their data-conifg attribute and use that as the name of the file that it will search for  








