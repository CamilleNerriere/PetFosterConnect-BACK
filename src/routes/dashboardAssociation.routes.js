import { Router } from "express";
import { dashboardController } from "../controllers/dashboard.controller.js";
import { catchErrors } from "../middlewares/catchError.js";

const dashboardAssociationRoutes = Router();

dashboardAssociationRoutes.get("/association/animals", catchErrors(dashboardController.getAnimals));

dashboardAssociationRoutes.post(
    "/association/animals",
    catchErrors(dashboardController.storeAnimal)
);

dashboardAssociationRoutes.patch(
    "/association/animals/(\\d+)",
    catchErrors(dashboardController.updateAnimal)
);

dashboardAssociationRoutes.delete(
    "/association/animals/(\\d+)",
    catchErrors(dashboardController.destroyAnimal)
);

dashboardAssociationRoutes.get("/association/profile", catchErrors(dashboardController.getProfile));

dashboardAssociationRoutes.patch(
    "/association/profile",
    catchErrors(dashboardController.updateProfile)
);

dashboardAssociationRoutes.delete(
    "/association/profile",
    catchErrors(dashboardController.destroyProfile)
);

dashboardAssociationRoutes.get(
    "/association/request/",
    catchErrors(dashboardController.getRequests)
);

dashboardAssociationRoutes.patch(
    "/association/request/:id(\\d+)",
    catchErrors(dashboardController.updateRequest)
);

export { dashboardAssociationRoutes };
