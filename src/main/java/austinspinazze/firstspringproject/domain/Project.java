package austinspinazze.firstspringproject.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.validator.constraints.UniqueElements;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
// An entity is a lightweight persistence domain object. Typically, an entity represents a table in a relational database,
// and each entity instance corresponds to a row in that table. The primary programming artifact of an entity is the entity
// class, although entities can use helper classes.
// The persistent state of an entity is represented through either persistent fields or persistent properties.
// These fields or properties use object/relational mapping annotations to map the entities and entity relationships to
// the relational data in the underlying data store.

// Provides for the specification of generation strategies for the values of primary keys.
// The GeneratedValue annotation may be applied to a primary key property or field of an entity or mapped superclass
// in conjunction with the Id annotation. The use of the GeneratedValue annotation is only required to be supported for
// simple primary keys. Use of the GeneratedValue annotation is not supported for derived primary keys.

// Defines the types of primary key generation strategies.
// Table - Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.
// Sequence - Indicates that the persistence provider must assign primary keys for the entity using a database sequence.
// Identity - Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
// Auto - Indicates that the persistence provider should pick an appropriate strategy for the particular database. The AUTO
// generation strategy may expect a database resource to exist, or it may attempt to create one. A vendor may provide
// documentation on how to create such resources in the event that it does not support schema generation or cannot create
// the schema resource at runtime.

// Specifies the primary key of an entity. The field or property to which the Id annotation is applied should be one of
// the following types: any Java primitive type; any primitive wrapper type; String; java.util.Date; java.sql.Date;
// java.math.BigDecimal; java.math.BigInteger.
// The mapped column for the primary key of the entity is assumed to be the primary key of the primary table. If no Column
// annotation is specified, the primary key column name is assumed to be the name of the primary key property or field.

import java.util.Date;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Project name is required") //Validation to ensure projectName is not blank
    private String projectName;
    @NotBlank(message = "Project idendentifier is required")
    @Size(min = 4, max = 5, message = "Please use 4 to 5 characters")
    @Column(updatable = false, unique = true)
    private String projectIdentifier;
    @NotBlank(message = "Project description is required")
    private String description;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date start_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date end_date;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date created_At;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date updated_At;

    public Project() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Date getCreated_At() {
        return created_At;
    }

    public void setCreated_At(Date created_At) {
        this.created_At = created_At;
    }

    public Date getUpdated_At() {
        return updated_At;
    }

    public void setUpdated_At(Date updated_At) {
        this.updated_At = updated_At;
    }

    //The @PrePersist and @PreUpdate annotations are  JPA annotations introduced in JPA 1.0. Both annotations are used
    // to configure callbacks that are triggered on specific entity lifecycle events. The @PrePersist annotation is used
    // to configure a callback for pre-persist(pre-insert) events of the entity. In other words, it is used to annotate
    // model methods to indicate that the method should be called before the entity is inserted (persisted) into the database.
    @PrePersist
    protected void onCreate() {
        this.created_At = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updated_At = new Date();
    }

}
