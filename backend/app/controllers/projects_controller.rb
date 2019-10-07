class ProjectsController < ApplicationController
    
    def index
        projects = Project.all
        render json: projects, except: [:updated_at, :created_at], include: ["technologies"]
      end
    
      def show
        project = Project.find_by(id: params[:id])
        render json: project, except: [:updated_at, :created_at], include: ["technologies"]
      end

      private

      def project_params
        params.require(:project).permit(
            :id,
            :name,
            :description,
            :link,
            :category,
            :technology1,
            :technology2,
            :technology3,
            :image
        )
      end


end
