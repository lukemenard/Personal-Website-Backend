require 'csv'


# Experience.destroy_all

csv = CSV.read("db/data/Experience.csv", headers:true)

i = 0
7.times do
    Experience.create({company: csv[i]["Company"], title: csv[i]["Title"], location: csv[i]["Location"], start_year: csv[i]["Start_Year"], end_year: csv[i]["End_Year"], description1: csv[i]["Description1"], description2: csv[i]["Description2"], description3: csv[i]["Description3"], description4: csv[i]["Description4"], image: csv[i]["Image"]})
    i += 1
end

portfolio_csv = CSV.read("db/data/Portfolio.csv", headers:true)

i = 0
13.times do
    Project.create({name: portfolio_csv[i]["Name"], description: portfolio_csv[i]["Description"], link: portfolio_csv[i]["Link"], category: portfolio_csv[i]["Category"], technology1: portfolio_csv[i]["Technology1"], technology2: portfolio_csv[i]["Technology2"], technology3: portfolio_csv[i]["Technology3"], image: portfolio_csv[i]["Image"]})
    i += 1
end

Technology.create(name: "Javascript")
Technology.create(name: "Ruby on Rails")
Technology.create(name: "Google Maps")
Technology.create(name: "Ruby")
Technology.create(name: "Command Line Interface")
Technology.create(name: "Mapping")
Technology.create(name: "R")
Technology.create(name: "GIS")
Technology.create(name: "Google Earth Engine")
Technology.create(name: "Remote Sensing")
Technology.create(name: "Python")
Technology.create(name: "Excel")

ProjectTechnology.create(project_id: 1, technology_id: 1)
ProjectTechnology.create(project_id: 1, technology_id: 2)
ProjectTechnology.create(project_id: 1, technology_id: 3)
ProjectTechnology.create(project_id: 2, technology_id: 2)
ProjectTechnology.create(project_id: 2, technology_id: 4)
ProjectTechnology.create(project_id: 3, technology_id: 4)
ProjectTechnology.create(project_id: 3, technology_id: 5)
ProjectTechnology.create(project_id: 4, technology_id: 7)
ProjectTechnology.create(project_id: 4, technology_id: 8)
ProjectTechnology.create(project_id: 5, technology_id: 8)
ProjectTechnology.create(project_id: 6, technology_id: 8)
ProjectTechnology.create(project_id: 7, technology_id: 1)
ProjectTechnology.create(project_id: 7, technology_id: 8)
ProjectTechnology.create(project_id: 7, technology_id: 9)
ProjectTechnology.create(project_id: 8, technology_id: 8)
ProjectTechnology.create(project_id: 8, technology_id: 10)
ProjectTechnology.create(project_id: 9, technology_id: 8)
ProjectTechnology.create(project_id: 9, technology_id: 11)
ProjectTechnology.create(project_id: 12, technology_id: 12)
ProjectTechnology.create(project_id: 13, technology_id: 8)