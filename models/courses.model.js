export default (sequelize, Sequelize) => {
  const Courses = sequelize.define('courses', {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4
    },
    course_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    instructor: {
      type: Sequelize.STRING,
      allowNull: false
    },
    schedule: {
      type: Sequelize.STRING,
      allowNull: false
    },
    max_students: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {timestamps: true})
  return Courses
}