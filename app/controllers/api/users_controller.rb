class Api::UsersController < ApplicationController
    def index
        @house = House.find(params[:house_id])
        @family = @house.families.find params[:family_id]
        @users = @family.users

        render json: @users
      end
    
      def show
        @house = House.find(params[:house_id])
        @family = @house.families.find params[:family_id]
        @user = @family.users.find params[:id]
        render json: @user
      end
end
