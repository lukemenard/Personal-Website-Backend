class ExperiencesController < ApplicationController

    def index
        experiences = Experience.all
        render json: experiences, except: [:updated_at, :created_at]
      end
    
      def show
        experience = Experience.find_by(id: params[:id])
        render json: experience, except: [:updated_at, :created_at]
      end

      private

      def experience_params
        params.require(:experience).permit(
            :id,
            :company,
            :title,
            :location,
            :start_year,
            :end_year,
            :description1,
            :description2,
            :description3,
            :description4,
        )
      end

end