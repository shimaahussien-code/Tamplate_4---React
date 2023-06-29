import { Col } from "react-bootstrap";

export const ProjectCard = (props) => {
  const {title, description,source} = props;
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-image">
        
        <div className="overlay">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
        <img className="imagePro" src={source} alt="pic"/>
      </div>
    </Col>
  )
}