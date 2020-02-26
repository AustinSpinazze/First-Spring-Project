package austinspinazze.firstspringproject.web;

import austinspinazze.firstspringproject.domain.Project;
import austinspinazze.firstspringproject.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    // This is our controller
    @Autowired
    private ProjectService projectService;

    @PostMapping("")
    // @PostMapping - @PostMapping is specialized version of @RequestMapping annotation that acts as a shortcut for
    // @RequestMapping(method = RequestMethod.POST). @PostMapping annotated methods handle the HTTP POST requests matched
    // with given URI expression(@RequestMapping - the annotation is used to map web requests to Spring Controller methods)
    // ResponseEntity is a type that allows us to have more control of our JSON responses
    // @RequestBody - To put it in layman terms, the @RequestBody annotation binds the HTTPRequest body to the domain object. Spring
    // framework automatically deserializes incoming HTTPRequest to the Java object using Http Message Converters. We
    // pass the body of the request through a HttpMessageConverter to resolve the method argument depending on the content
    // type of the request. To understand this, let’s take an example of the customer registration process.
    // @Valid - Marks a property, method parameter or method return type for validation cascading. Constraints defined
    // on the object and its properties are be validated when the property, method parameter or method return type is validated.
    // In other words better error messages
    // ResponseEntity<?> (the question mark allows returning of gerneric type)
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
        if(result.hasErrors()) {

            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error: result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }



        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

}
