class Api::FamiliesController < ApplicationController
    def index
        @house = House.find(params[:house_id])
        @families = @house.families.all.order(points: :desc)
        
        render json: @families
      end
    
      def show
        @house = House.find(params[:house_id])
        @family = @house.families.find params[:id]
        @users = @family.users.all.order(points: :desc)
    
        render json: {
          family: @family,
          users: @users
        }
      end
end
