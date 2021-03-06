package austinspinazze.firstspringproject.web;

import austinspinazze.firstspringproject.domain.Project;
import austinspinazze.firstspringproject.services.MapValidationErrorService;
import austinspinazze.firstspringproject.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/* @PostMapping - @PostMapping is specialized version of @RequestMapping annotation that acts as a shortcut for
   @RequestMapping(method = RequestMethod.POST). @PostMapping annotated methods handle the HTTP POST requests matched
   with given URI expression(@RequestMapping - the annotation is used to map web requests to Spring Controller methods)
   ResponseEntity is a type that allows us to have more control of our JSON responses
   @RequestBody - To put it in layman terms, the @RequestBody annotation binds the HTTPRequest body to the domain object. Spring
   framework automatically deserializes incoming HTTPRequest to the Java object using Http Message Converters. We
   pass the body of the request through a HttpMessageConverter to resolve the method argument depending on the content
   type of the request. To understand this, let’s take an example of the customer registration process.
   @Valid - Marks a property, method parameter or method return type for validation cascading. Constraints defined
   on the object and its properties are be validated when the property, method parameter or method return type is validated.
   In other words better error messages
   ResponseEntity<?> (the question mark allows returning of gerneric type)
   @PathVariable - is a Spring annotation which indicates that a method parameter should be bound to a URI template variable. If
   the method parameter is Map<String, String> then the map is populated with all path variable names and values.
 */

@RestController
@RequestMapping("/api/project")
@CrossOrigin
public class ProjectController {
    // This is our controller
    @Autowired
    private ProjectService projectService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Project project1 = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Project> getAllProjects(){return projectService.findAllProjects();}

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId) {
        projectService.deleteProjectByIdentifier(projectId);

        return new ResponseEntity<String>("Project '"+projectId+"' was deleted", HttpStatus.OK);
    }
}
