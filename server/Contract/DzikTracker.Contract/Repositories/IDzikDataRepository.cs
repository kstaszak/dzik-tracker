using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DzikTracker.Contract.Entities.DataModel;

namespace DzikTracker.Contract.Repositories
{
    public interface IDzikDataRepository
    {
        IQueryable<LastTrainings> GetLatestTrainings();
    }
}