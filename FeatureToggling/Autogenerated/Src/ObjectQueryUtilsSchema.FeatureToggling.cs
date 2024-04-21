﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ObjectQueryUtilsSchema

	/// <exclude/>
	public class ObjectQueryUtilsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ObjectQueryUtilsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ObjectQueryUtilsSchema(ObjectQueryUtilsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8bdd0ecd-68c3-464d-8df4-903ac936fc8b");
			Name = "ObjectQueryUtils";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("84b09f59-6bd7-4f07-9626-7a5c32da980f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,86,109,111,211,48,16,254,220,73,252,7,35,190,164,82,149,31,192,214,162,173,163,168,18,99,3,10,124,64,8,185,206,117,53,115,157,96,59,133,106,236,191,115,126,73,26,103,33,172,104,226,83,226,243,249,185,187,231,94,108,34,233,6,116,65,25,144,5,40,69,117,190,50,233,105,81,204,128,154,82,129,126,114,116,251,228,104,80,106,46,175,201,251,157,54,176,57,110,173,211,105,46,4,48,195,115,169,241,95,178,82,41,144,166,87,237,21,72,80,156,221,211,121,205,229,247,78,97,250,242,103,129,222,104,123,250,158,194,59,88,5,100,220,194,205,103,10,174,113,65,166,130,106,253,156,92,46,191,225,238,219,18,212,238,131,225,66,59,29,46,13,40,73,5,209,134,26,206,8,179,186,29,170,131,91,167,222,198,108,184,51,165,108,13,94,169,80,124,75,13,196,152,109,213,147,197,196,234,6,220,26,120,198,65,100,136,124,229,49,194,110,11,81,1,205,114,41,118,100,207,243,57,119,145,83,181,59,209,70,33,43,163,134,197,147,89,41,217,201,98,68,114,23,216,100,50,33,95,11,149,23,160,204,238,148,49,84,114,46,145,177,51,54,144,240,227,223,145,147,225,241,191,187,236,208,166,249,166,160,10,176,80,202,141,252,196,205,250,35,21,37,204,184,192,84,5,21,52,184,204,115,225,2,97,94,93,205,40,51,185,218,29,22,201,225,6,93,124,62,101,32,51,159,181,86,14,47,192,172,115,151,196,114,41,56,171,114,232,22,21,31,61,20,146,87,96,174,66,118,246,106,137,119,153,84,121,123,131,13,59,36,183,62,78,5,216,165,178,51,169,216,100,230,82,157,102,89,210,60,57,114,56,100,60,169,16,6,87,84,161,28,35,222,155,36,69,37,35,227,134,195,105,173,154,152,93,1,249,42,89,12,67,210,7,131,11,216,44,99,140,96,181,5,17,164,73,109,194,123,84,227,124,176,105,106,193,156,106,223,152,49,20,230,119,139,80,117,120,35,18,188,242,124,238,93,11,36,53,142,190,166,155,101,70,239,37,32,105,26,27,237,89,168,144,238,194,207,93,103,102,163,122,33,103,37,23,217,123,190,41,68,40,168,43,5,25,103,216,25,93,9,29,145,190,90,36,43,247,169,179,190,165,138,180,170,31,169,233,108,136,63,85,129,71,247,138,85,120,129,167,22,204,139,116,46,183,249,13,36,193,137,152,130,7,244,66,223,64,59,184,13,35,199,123,91,163,170,180,185,92,229,181,134,91,140,73,93,190,105,163,229,34,134,42,78,248,138,36,241,225,49,145,165,16,181,153,138,53,43,172,202,196,127,60,3,238,16,38,130,221,248,245,222,122,95,216,195,0,110,253,243,231,18,123,81,255,229,148,213,158,107,39,184,160,6,141,102,195,81,0,26,156,113,153,33,87,51,65,175,117,234,231,19,249,69,34,233,92,98,86,36,171,99,111,4,96,93,206,166,81,20,141,152,210,11,122,3,225,78,15,222,54,57,171,155,126,129,40,173,98,243,69,101,231,17,54,97,115,44,249,158,36,91,27,12,90,139,240,48,76,23,164,237,244,118,151,39,182,78,134,109,127,227,26,30,17,188,31,62,127,33,183,1,254,174,110,240,254,226,14,242,182,248,94,201,207,195,227,194,111,183,159,26,243,151,178,220,128,162,75,97,223,2,196,167,238,108,135,255,137,89,115,221,222,215,121,169,24,118,108,215,212,240,94,63,96,116,88,218,170,146,181,211,163,168,134,81,52,82,235,7,74,218,51,189,226,57,210,128,247,220,133,52,236,13,60,245,13,67,94,132,72,210,79,107,80,22,38,40,12,201,243,176,115,124,8,199,205,43,54,158,195,243,75,149,161,133,204,61,227,42,22,157,172,73,114,180,219,195,241,16,139,210,5,22,188,15,64,73,23,107,221,247,119,132,86,61,34,30,224,242,98,13,178,233,113,151,206,1,142,123,184,255,224,119,96,232,28,52,3,55,93,30,141,244,61,228,127,163,191,43,138,71,73,196,227,197,210,106,21,223,64,177,16,101,191,1,103,86,4,92,233,13,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8bdd0ecd-68c3-464d-8df4-903ac936fc8b"));
		}

		#endregion

	}

	#endregion

}
