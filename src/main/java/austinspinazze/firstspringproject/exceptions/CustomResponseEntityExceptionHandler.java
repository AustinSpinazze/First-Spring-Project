package austinspinazze.firstspringproject.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

// @ControllerAdvice - It allows you to handle exceptions across the whole application, not just to an individual controller.
// You can think of it as an interceptor of exceptions thrown by methods annotated with @RequestMapping or one of the shortcuts.

// @RestController - simply returns the object and object data is directly written into HTTP response as JSON or XML.
// This can also be done with traditional @Controller and use @ResponseBody annotation but since this is the default
// behavior of RESTful Web services, Spring introduced @RestController which combined the behavior of @Controller and
// @ResponseBody together.

// ResponseEntityExceptionHandler - A convenient base class for @ControllerAdvice classes that wish to provide centralized
// exception handling across all @RequestMapping methods through @ExceptionHandler methods. This base class provides an
// @ExceptionHandler method for handling internal Spring MVC exceptions. This method returns a ResponseEntity for writing
// to the response with a message converter, in contrast to DefaultHandlerExceptionResolver which returns a ModelAndView.
// If there is no need to write error content to the response body, or when using view resolution
// (e.g., via ContentNegotiatingViewResolver), then DefaultHandlerExceptionResolver is good enough.
@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleProjectExcpetion(ProjectIdException ex, WebRequest request) {
        ProjectIdExceptionResponse exceptionResponse = new ProjectIdExceptionResponse(ex.getMessage());
        return new ResponseEntity(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
