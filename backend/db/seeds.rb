require 'csv'


# Experience.destroy_all

csv = CSV.read("db/data/Experience.csv", headers:true)

experience_array = []
i = 0
7.times do
    Experience.create({company: csv[i]["Company"], title: csv[i]["Title"], location: csv[i]["Location"], start_year: csv[i]["Start_Year"], end_year: csv[i]["End_Year"], description1: csv[i]["Description1"], description2: csv[i]["Description2"], description3: csv[i]["Description3"], description4: csv[i]["Description4"]})
    i += 1
end

# experience_array.each do |experience|
#     Experience.create(
#         company: [:company]
#     )