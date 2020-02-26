package austinspinazze.firstspringproject.services;

import austinspinazze.firstspringproject.domain.Project;
import austinspinazze.firstspringproject.exceptions.ProjectIdException;
import austinspinazze.firstspringproject.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//@Service annotates classes at the service layer. We mark beans with @Service to indicate that it's holding the business
// logic. So there's no any other specialty except using it in the service layer. (A bean is an object that is instantiated,
// assembled, and otherwise managed by a Spring IoC container. These beans are created with the configuration metadata that
// you supply to the container. For example, in the form of XML <bean/> definitions which you have already seen in the previous chapters.
@Service
public class ProjectService {
    //Dependency Injection driven by @Autowired Annotations. This annotation allows Spring to resolve and inject
    // collaborating beans into your bean. Helps to avoid too much logic in controller layer. This becomes Service layer
    @Autowired
    private ProjectRepository projectRepository;

    public Project saveOrUpdateProject(Project project) {
        try {
            project.setProjectIdentifier((project.getProjectIdentifier().toUpperCase()));
            return projectRepository.save(project);
        }
        catch (Exception e) {
                throw new ProjectIdException("Project ID '"+project.getProjectIdentifier().toUpperCase()+"' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId) {

        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());

        if(project == null ){
            throw new ProjectIdException("Project ID '"+projectId+"' does not exist.");
        }

        return project;
    }

    public Iterable<Project> findAllProjects() {
        return projectRepository.findAll();
    }
}
